"use client";
import React, { PropsWithChildren } from "react";
import AppThemeProvider from "./AppThemeProvider";
import { Toaster } from "sonner";

import { SessionProvider } from "next-auth/react";
import { ParticleConnectkit } from "../auth/connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";
import { AlertDialogProvider } from "./AlertDialogProvider";

const queryClient = new QueryClient();

const AppProvider: React.FC<PropsWithChildren & { session?: Session }> = ({
  children,
  session,
}) => {
  return (
    <SessionProvider session={session}>
      <ParticleConnectkit>
        <QueryClientProvider client={queryClient}>
          <AppThemeProvider>
            <AlertDialogProvider>
              <Toaster richColors position="bottom-right" />
              {children}
            </AlertDialogProvider>
          </AppThemeProvider>
        </QueryClientProvider>
      </ParticleConnectkit>
    </SessionProvider>
  );
};

export default AppProvider;
