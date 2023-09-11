"use client";
import {
  useContractCardTBA,
  useContractERC1967,
  useContractRWACar,
} from "@/hooks";
import { RWACar } from "@/utils";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const { isLoading, onCreateTBA, onTokenizeCar } = useContractERC1967();
  const { onSetManagement } = useContractRWACar();
  const { onExecute } = useContractCardTBA();
  const data = {
    tbaAddress: "",
    numberChassi: 999,
    doclink: "doclink",
  };

  return (
    <main className="flex h-screen items-center  justify-center bg-black">
      <button
        className="rounded-xl bg-white p-10 font-mono text-2xl font-bold text-black transition-all duration-300 ease-in-out hover:bg-opacity-70 active:scale-95"
        onClick={() => onExecute(0, 0)}
      >
        {!isLoading ? "APERTE PARA REALIZAR A FUNÇÃO" : "LOADING..."}
      </button>
    </main>
  );
}
