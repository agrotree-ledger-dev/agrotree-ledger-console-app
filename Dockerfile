FROM node:22-alpine AS base

RUN corepack enable

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml ./

COPY .env.production ./.env

COPY prisma ./prisma

RUN pnpm install


# build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


ENV NEXT_TELEMETRY_DISABLED=1

ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

RUN pnpm run build



# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

LABEL com.centurylinklabs.watchtower.enable="true"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]

#--------------------------------------------------------
# # build
# FROM node:22-alpine AS builder

# RUN corepack enable


# USER node
# WORKDIR /home/node

# COPY prisma ./prisma

# COPY package.json ./

# COPY pnpm-lock.yaml ./

# COPY .env.production ./.env

# RUN pnpm install

# COPY --chown=node:node . .

# # RUN pnpm run postinstall

# ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

# RUN pnpm run build

# # run production

# FROM node:22-alpine

# ENV NODE_ENV=production

# USER node
# WORKDIR /home/node

# # COPY --from=builder --chown=node:node /home/node/package.json ./
# # COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
# # COPY --from=builder --chown=node:node /home/node/public/ ./public/
# # COPY --from=builder --chown=node:node /home/node/.next/ ./.next/
# # COPY --from=builder --chown=node:node /home/node/.env ./

# # RUN pnpm add sharp
# # ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

# LABEL com.centurylinklabs.watchtower.enable="true"


# COPY --from=builder --chown=node:node /home/node/public/ ./.next/standalone/public/
# COPY --from=builder --chown=node:node /home/node/.next/static/ ./.next/standalone/.next/static/
# COPY --from=builder --chown=node:node /home/node/.next/standalone/ ./.next/standalone/

# CMD ["node", ".next/standalone/server.js"]