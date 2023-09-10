import type SmartAccount from "@biconomy/smart-account";
import { useSendTransactions } from "./useSendTransactions";
import { useState } from "react";
import { IBorrow } from "@/interfaces";
import { Borrow } from "@/utils";

export function useContractBorrow(smartAccount: SmartAccount) {
  const [isLoading, setIsLoading] = useState(false);
  const { onSendTransactions } = useSendTransactions(smartAccount);

  async function onBorrow(value: number, tba: `0x${string}`) {
    setIsLoading(true);
    const data = IBorrow.encodeFunctionData("borrow", [value, tba]);
    const txGenerateData = {
      to: Borrow.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  async function onStakeCar(tokenId: number, tba: `0x${string}`) {
    setIsLoading(true);
    const data = IBorrow.encodeFunctionData("stakeCar", [tokenId, tba]);
    const txGenerateData = {
      to: Borrow.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  async function onStakeRealState(
    tokenId: number,
    amount: number,
    tba: `0x${string}`
  ) {
    setIsLoading(true);
    const data = IBorrow.encodeFunctionData("stakeRealState", [
      tokenId,
      amount,
      tba,
    ]);
    const txGenerateData = {
      to: Borrow.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  return {
    isLoading,
    onBorrow,
    onStakeCar,
    onStakeRealState,
  };
}
