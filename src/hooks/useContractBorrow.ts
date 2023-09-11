import { useState } from "react";
import { Borrow, calculateGasLimit, getEthersProvider } from "@/utils";
import { BorrowAndStake__factory } from "@/contracts";

export function useContractBorrow() {
  const [isLoading, setIsLoading] = useState(false);
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const factory = new BorrowAndStake__factory(signer);
  const contract = factory.attach(Borrow.sepolia.contractAddress);

  async function onBorrow(value: number, tbaAddress: string) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "borrow", [
        value,
        tbaAddress,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.borrow(value, tbaAddress, gas);
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

  async function onStakeCar(tokenId: number, tbaAddress: `0x${string}`) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "stakeCar", [
        tokenId,
        tbaAddress,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.stakeCar(tokenId, tbaAddress, gas);
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

  async function onStakeRealState(
    tokenId: number,
    amount: number,
    tbaAddress: `0x${string}`
  ) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "stakeRealState", [
        tokenId,
        amount,
        tbaAddress,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.stakeRealState(
        tokenId,
        amount,
        tbaAddress,
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

  return {
    isLoading,
    onBorrow,
    onStakeCar,
    onStakeRealState,
  };
}
