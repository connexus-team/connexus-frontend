"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { sepolia } from "viem/chains";
import { sepolia_apikey } from "@/constants";
import { SmartContextProvider } from "@/contexts";

const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: sepolia_apikey }), publicProvider()]
);

const projectId = "4ebbf2eddb8738c4c84cd8082b5e9756";

const { wallets } = getDefaultWallets({
  appName: "Omnes Blockchain",
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Omens Wallet Connector",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        coolMode
        chains={chains}
        theme={darkTheme({
          overlayBlur: "small",
          fontStack: "system",
        })}
      >
        <SmartContextProvider>{children}</SmartContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
