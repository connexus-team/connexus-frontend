import { IAuthContext } from "@/interfaces";
import { StorageHelper } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { SafeEventEmitterProvider } from "@web3auth/base";
import { CHAIN_ID, SEPOLIA_RPC } from "@/constants";

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [tbaAddress, setTbaAddress] = useState<`0x${string}`>();
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const clientId =
    "BMmz5k221pU8zkxdtVaalNy01l8HwyZsuQAQuRjZf6vNJQFwT3_M6bowmuVmaX33SXOlh_MfYxEz_rPSWnk34jg";

  const init = async () => {
    try {
      console.log("init")
      const web3auth = new Web3Auth({
        clientId,
        web3AuthNetwork: "testnet",
        chainConfig: {
          chainNamespace: "other",
          chainId: CHAIN_ID.toString(),
          rpcTarget: SEPOLIA_RPC,
        },
      });
      console.log(web3auth)
      setWeb3auth(web3auth);

      await web3auth.initModal();
      if (web3auth.provider) {
        setProvider(web3auth.provider);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  function onSetTBA(address: `0x${string}`) {
    setTbaAddress(address!);
    StorageHelper.setItem("tbaAddress", address);
  }

  useEffect(() => {
    const data = StorageHelper.getItem("tbaAddress");
    if (data) {
      setTbaAddress(data as `0x${string}`);
    }
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ tbaAddress, onSetTBA, connectWallet }}>
      {children}
    </AuthContext.Provider>
  );
}
