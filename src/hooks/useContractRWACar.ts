import { useState } from "react";
import { RWACar, calculateGasLimit, getEthersProvider } from "@/utils";
import { RWACar__factory } from "@/contracts";

export function useContractRWACar() {
  const [isLoading, setIsLoading] = useState(false);
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const factory = new RWACar__factory(signer);
  const contract = factory.attach(RWACar.sepolia.contractAddress);

  async function onSafeTransferFrom(
    addressSigner: `0x${string}`,
    address: `0x${string}`,
    tokenId: number
  ) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "transferFrom", [
        addressSigner,
        address,
        tokenId,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.transferFrom(
        addressSigner,
        address,
        tokenId,
        gas
      );
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      setIsLoading(false);
      return tx;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onSetApproveForAll(
    operator: `0x${string}`,
    approved: boolean
  ) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "setManagement", [
        operator,
        approved,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.setApprovalForAll(
        operator,
        approved,
        gas
      );
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      setIsLoading(false);
      return tx;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onSetManagement(addressManagement: string) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "setManagement", [
        addressManagement,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.setManagement(addressManagement, gas);
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      setIsLoading(false);
      return tx;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onSafeTransferFrom,
    onSetApproveForAll,
    onSetManagement,
  };
}
