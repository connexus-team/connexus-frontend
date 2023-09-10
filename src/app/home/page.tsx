"use client";
import { ERC1967 } from "@/utils";
import { BigNumber } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
} from "wagmi";
import {ManagmentContract} from "../../abi/contract";
import {getEthersProvider} from "../../utils/web3";


export default function Home() {
  const { address } = useAccount();
  const provider = getEthersProvider();
  const signer = provider?.getSigner();

  const contractInstance = new ManagmentContract(ERC1967.sepolia.contractAddress, provider!, signer!);



  async function onFunction1() {
    await contractInstance.createConnexusCard({
        to: address!
    });
  }

  return (
    <main className="flex h-screen items-center  justify-center bg-black">
      <button
        className="rounded-xl bg-white p-10 transition-all duration-300 ease-in-out hover:bg-opacity-70 active:scale-95"
        onClick={onFunction1}
      >
        APERTE PARA REALIZAR A FUNÇÃO
      </button>
    </main>
  );
}
