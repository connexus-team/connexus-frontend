"use client";
import { ERC1967 } from "@/utils";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const [dataHash, setDataHash] = useState<`0x${string}`>();

  return (
    <main className="flex h-screen items-center  justify-center bg-black">
      <button
        className="rounded-xl bg-white p-10 transition-all duration-300 ease-in-out hover:bg-opacity-70 active:scale-95"
        onClick={undefined}
      >
        APERTE PARA REALIZAR A FUNÇÃO
      </button>
    </main>
  );
}
