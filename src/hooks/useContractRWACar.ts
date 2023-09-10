import type SmartAccount from "@biconomy/smart-account";
import { useSendTransactions } from "./useSendTransactions";
import { useState } from "react";
import { IRWACar } from "@/interfaces";
import { RWACar } from "@/utils";

export function useContractRWACar(smartAccount: SmartAccount) {
  const [isLoading, setIsLoading] = useState(false);
  const { onSendTransactions } = useSendTransactions(smartAccount);

  async function onSafeTransferFrom(
    addressSigner: `0x${string}`,
    address: `0x${string}`,
    tokenId: number
  ) {
    setIsLoading(true);
    const data = IRWACar.encodeFunctionData("safeTrasferFrom", [
      addressSigner,
      address,
      tokenId,
    ]);
    const txGenerateData = {
      to: RWACar.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  async function onSetApproveForAll(
    operator: `0x${string}`,
    approved: boolean
  ) {
    setIsLoading(true);
    const data = IRWACar.encodeFunctionData("setApprovalForAll", [
      operator,
      approved,
    ]);
    const txGenerateData = {
      to: RWACar.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  return {
    isLoading,
    onSafeTransferFrom,
    onSetApproveForAll,
  };
}
