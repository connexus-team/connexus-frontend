import { ERC1967 } from "./../utils";
import type SmartAccount from "@biconomy/smart-account";
import { useSendTransactions } from "./useSendTransactions";
import { useState } from "react";
import {
  ITokenizeCarPayload,
  ITokenizeRealStatePayload,
  IERC1967,
} from "@/interfaces";
import { Management__factory } from "@/contracts";

export function useContractERC1967(smartAccount: SmartAccount) {
  const [isLoading, setIsLoading] = useState(false);
  const { onSendTransactions } = useSendTransactions(smartAccount);
/*   const provider = getEthersProvider();
  const signer = provider.getSigner();
  const factory = new Management__factory(signer);
  const contract = factory.attach(contractAddress); */

  async function onCreateTBA(addressSigner: `0x$ {string}`) {
    setIsLoading(true);
    const data = IERC1967.encodeFunctionData("createConnexusCard", [
      addressSigner,
    ]);
    const txGenerateData = {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  async function onCreateBankTBA(collection: `0x${string}`, tokenId: number) {
    setIsLoading(true);
    const data = IERC1967.encodeFunctionData("createBankTBACard", [
      collection,
      tokenId,
    ]);
    const txGenerateData = {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData!]);
    setIsLoading(false);
    return tx;
  }

  async function onTokenizeCar(payload: ITokenizeCarPayload) {
    setIsLoading(true);
    const { tbaAddress, numberChassi, doclink } = payload;
    const data = IERC1967.encodeFunctionData("createBankTBACard", [
      tbaAddress,
      numberChassi,
      doclink,
    ]);
    const txGenerateData = {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData]);
    setIsLoading(false);
    return tx;
  }

  async function onTokenizeRealState(payload: ITokenizeRealStatePayload) {
    setIsLoading(true);
    const { tbaAddress, numberChassi, doclink, fraction } = payload;
    const valueFraction = fraction <= 1000 ? 1 : fraction <= 2000 ? 2 : 3;
    const data = IERC1967.encodeFunctionData("createBankTBACard", [
      tbaAddress,
      numberChassi,
      doclink,
      valueFraction,
    ]);
    const txGenerateData = {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
    const tx = await onSendTransactions([txGenerateData]);
    setIsLoading(false);
    return tx;
  }

  return {
    isLoading,
    onCreateTBA,
    onTokenizeCar,
    onTokenizeRealState,
    onCreateBankTBA,
  };
}
