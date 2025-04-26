"use client";

import React from "react";

import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
// embedded wallet start
import { EntryPosition, wallet } from "@particle-network/connectkit/wallet";

// embedded wallet end

// solana start
import { solana, solanaDevnet } from "@particle-network/connectkit/chains";
import {
  injected,
  solanaWalletConnectors,
} from "@particle-network/connectkit/solana";
// solana end

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string;
const appId = process.env.NEXT_PUBLIC_APP_ID as string;

if (!projectId || !clientKey || !appId) {
  throw new Error("Please configure the Particle project in .env first!");
}

const config = createConfig({
  projectId,
  clientKey,
  appId,
  //Mainnet: 101, Testnet: 102, Devnet: 103
  initialChainId: {
    solana: 103,
  },
  appearance: {
    recommendedWallets: [
      { walletId: "phantom", label: "Recommended" },
      { walletId: "coinbaseWallet", label: "Popular" },
    ],
    language: "en-US",
    connectorsOrder: ["email", "social", "wallet"],
    logo: "https://agrotree-app.vercel.app/brand/logo-light.png",
    // theme: {
    //   // modal
    //   "--pcm-overlay-background": "rgba(71, 88, 107, 0.24)",
    //   "--pcm-overlay-backdrop-filter": "blur(6px)",
    //   "--pcm-modal-box-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",

    //   // background
    //   "--pcm-body-background": "#083624",
    //   "--pcm-body-background-secondary": "#10583a",
    //   "--pcm-body-background-tertiary": "#F9F9FA",

    //   // foreground
    //   "--pcm-body-color": "#ffffff",
    //   "--pcm-body-color-secondary": "#8B8EA1",
    //   "--pcm-body-color-tertiary": "#DCDFE6",

    //   "--pcm-body-action-color": "#999999",
    //   "--pcm-accent-color": "#87ff55",
    //   "--pcm-focus-color": "#87ff55",

    //   // button
    //   "--pcm-button-font-weight": "500",
    //   "--pcm-button-hover-shadow": "0px 2px 4px rgba(0, 0, 0, 0.05)",
    //   "--pcm-button-border-color": "#EAECF0",

    //   // primary button
    //   "--pcm-primary-button-color": "#ffffff",
    //   "--pcm-primary-button-bankground": "#083624",
    //   "--pcm-primary-button-hover-background": "#353738",

    //   // font
    //   "--pcm-font-family": `Manrope, Inter, Arial, Helvetica, sans-serif`,

    //   // radius
    //   "--pcm-rounded-sm": "6px",
    //   "--pcm-rounded-md": "12px",
    //   "--pcm-rounded-lg": "18px",
    //   "--pcm-rounded-xl": "24px",
    //   "--pcm-rounded-full": "9999px",

    //   "--pcm-success-color": "#58C08F",
    //   "--pcm-warning-color": "#F59E0A",
    //   "--pcm-error-color": "#EA4335",

    //   "--pcm-wallet-lable-color": "#33C759",
    // },
  },
  walletConnectors: [
    authWalletConnectors({
      authTypes: ["email", "google", "twitter", "facebook"],
      fiatCoin: "USD",
      promptSettingConfig: {
        promptMasterPasswordSettingWhenLogin: 1, // optional
        promptPaymentPasswordSettingWhenSign: 1, // optional
      },
    }),

    // solana start
    solanaWalletConnectors({
      connectorFns: [
        injected({ target: "phantom" }),
        injected({ target: "coinbaseWallet" }),
        injected({ target: "bitKeep" }),
        injected({ target: "trustWallet" }),
        injected({
          target: {
            icon: "https://play-lh.googleusercontent.com/EhgMPJGUYrA7-8PNfOdZgVGzxrOw4toX8tQXv-YzIvN6sAMYFunQ55MVo2SS_hLiNm8=w24-h24-rw",
            id: "backpack", // wallet unique id
            name: "Backpack Wallet",
            provider: (window) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return (window as any)?.backpack;
            },
          },
        }),
      ],
    }),
    // solana end
  ],
  plugins: [
    // embedded wallet start
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
    // embedded wallet end
  ],
  chains: [solana, solanaDevnet],
});

// Wrap your application with this component.
export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
