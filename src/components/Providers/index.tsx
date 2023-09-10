"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, sepolia, WagmiConfig } from "wagmi";
import { SmartContextProvider } from "@/contexts";
import {
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [publicProvider()]
);

const demoAppInfo = {
  appName: "Connexus",
};

const { wallets } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId: "4ebbf2eddb8738c4c84cd8082b5e9756",
  chains,
});

const connectors = connectorsForWallets([...wallets]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <SmartContextProvider>{children}</SmartContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
