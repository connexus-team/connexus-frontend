import type SmartAccount from "@biconomy/smart-account";
import { useTxData } from "./useTxData";
import { useSendTransactions } from "./useSendTransactions";
import { useState } from "react";
import { ITokenizeCarPayload, ITokenizeRealStatePayload } from "@/interfaces";
import toast from "react-hot-toast";

export function useContracts(smartAccount: SmartAccount) {
  const [isLoading, setIsLoading] = useState(false);
  const { onCreateTBACard, onTokenizeCarTX, onTokenizeRealStateTX } =
    useTxData();
  const { onSendTransactions } = useSendTransactions(smartAccount);

  async function onCreateTBA(addressSigner: string) {
    setIsLoading(true);
    const txGenerateData = await onCreateTBACard(addressSigner);
    const tx = await onSendTransactions([txGenerateData]);
    setIsLoading(false);
    return tx;
  }

  async function onTokenizeCar(data: ITokenizeCarPayload) {
    setIsLoading(true);
    toast.loading("Loading...");
    const { tbaAddress, numberChassi, doclink } = data;
    const txGenerateData = await onTokenizeCarTX(
      tbaAddress,
      numberChassi,
      doclink
    );
    const tx = await onSendTransactions([txGenerateData]);
    setIsLoading(false);
    return tx;
  }

  async function onTokenizeRealState(data: ITokenizeRealStatePayload) {
    setIsLoading(true);
    toast.loading("Loading...");
    const { tbaAddress, numberChassi, doclink, fraction } = data;
    const valueFraction = fraction <= 1000 ? 1 : fraction <= 2000 ? 2 : 3;
    const txGenerateData = await onTokenizeRealStateTX(
      tbaAddress,
      numberChassi,
      doclink,
      valueFraction
    );
    const tx = await onSendTransactions([txGenerateData]);
    setIsLoading(false);
    return tx;
  }

  return { isLoading, onCreateTBA, onTokenizeCar, onTokenizeRealState };
}
