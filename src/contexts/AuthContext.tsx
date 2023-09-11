import { IAuthContext } from "@/interfaces";
import { StorageHelper } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [tbaAddress, setTbaAddress] = useState<`0x${string}`>();

  function onSetTBA(address: `0x${string}`) {
    setTbaAddress(address!);
    StorageHelper.setItem("tbaAddress", address);
  }

  useEffect(() => {
    const data = StorageHelper.getItem("tbaAddress");
    if (data) {
      setTbaAddress(data as `0x${string}`);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ tbaAddress, onSetTBA }}>
      {children}
    </AuthContext.Provider>
  );
}
