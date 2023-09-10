"use client";
import "@biconomy/web3-auth/dist/src/style.css";
import type { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { sepolia } from "@wagmi/core/chains";
import { useSigner } from "wagmi";

type SmartContextType = {
  smartAccount: SmartAccount | null;
  scwAddress: string;
  scwLoading: boolean;
};

export const SmartContext = createContext<SmartContextType>({
  smartAccount: null,
  scwAddress: "",
  scwLoading: false,
});

export const useSmartContext = () => {
  const context = useContext(SmartContext);
  if (!context) {
    throw new Error(
      "useSmartContext must be used within a SmartContextProvider"
    );
  }
  return context;
};

export const SmartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [scwAddress, setScwAddress] = useState("");
  const [scwLoading, setScwLoading] = useState(false);
  const { data: signer } = useSigner();

  useEffect(() => {
    async function setupSmartAccount() {
      try {
        const chainId = sepolia.id as ChainId;
        setScwAddress("");
        setScwLoading(true);
        const walletProvider = new ethers.providers.Web3Provider(
          (signer?.provider as any).provider
        );
        const smartAccount = new SmartAccount(walletProvider, {
          activeNetworkId: chainId,
          supportedNetworksIds: [chainId],
          networkConfig: [
            {
              chainId: chainId,
              dappAPIKey: "3bWunTz8U.988fdac0-6c01-491f-af5e-df86c0feb666",
            },
          ],
        });
        await smartAccount.init();
        console.log("smartAccount: ", smartAccount)
        const context = smartAccount.getSmartAccountContext();
        console.log("context: ", context);
        setScwAddress(context.baseWallet.getAddress());
        console.log("setScwAddress: ", context);
        setSmartAccount(smartAccount);
        setScwLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    setupSmartAccount();
  }, [signer?.provider]);

  const value = {
    smartAccount,
    scwAddress,
    scwLoading,
  };

  return (
    <SmartContext.Provider value={value}>{children}</SmartContext.Provider>
  );
};
