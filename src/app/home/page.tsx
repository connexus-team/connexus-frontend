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

  const { config } = usePrepareContractWrite({
    address: ERC1967.sepolia.contractAddress,
    abi: ERC1967.sepolia.abi,
    functionName: "createConnexusCard",
    overrides: {
      from: address!,
      gasLimit: 1000000 as unknown as BigNumber,
    },
    args: [address],
  });

  const { writeAsync } = useContractWrite(config);

  async function onFunction1() {
    console.log("caiu");
    if (!writeAsync) return console.log("sem writeAsync");
    console.log("loading");
    const res = await writeAsync();
    setDataHash(res.hash);
    const wait = await res.wait();
    toast.success(`Minted: ${res?.hash}`);
    console.log("res: ", res);
    console.log("wait: ", wait);
  }

  /* async function onFunction2() {
    console.log(smartAccount);
    const tx = await onTokenizeCar(smartAccount?.owner as `0x${string}`);
    console.log(tx);
  }

  async function onFunction3() {
    console.log(smartAccount);
    const tx = await onTokenizeRealState(smartAccount?.owner as `0x${string}`);
    console.log(tx);
  }
 */
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
