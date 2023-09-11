import { useState } from "react";
import { Borrow, RWACar, calculateGasLimit, getEthersProvider } from "@/utils";
import { BorrowAndStake__factory } from "@/contracts";
import { useAuthContext } from "@/contexts";
import { useContractCardTBA } from "./useContractCardTBA";
import { ethers } from "ethers";

export function useContractBorrow() {
  const [isLoading, setIsLoading] = useState(false);
  const { tbaAddress } = useAuthContext();
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const factory = new BorrowAndStake__factory(signer);
  const contract = factory.attach(Borrow.sepolia.contractAddress);
  const { onExecute } = useContractCardTBA();

  async function onBorrow(payload: { id: number; value: number }) {
    setIsLoading(true);
    try {
      const value = payload.value === 1000 ? 0 : payload.value === 5000 ? 1 : 2;
      const iface = new ethers.utils.Interface(RWACar.sepolia.abi);
      const approvedData = iface.encodeFunctionData("setApprovalForAll", [
        Borrow.sepolia.contractAddress,
        true,
      ]);
      const executeApprove = await onExecute(0, 0, approvedData);
      console.log("executeApprove: ", executeApprove);
      const transferedData = iface.encodeFunctionData("transferFrom", [
        tbaAddress,
        Borrow.sepolia.contractAddress,
        payload.id,
      ]);
      const executeTransfer = await onExecute(0, 0, transferedData);
      console.log("executeTransfer: ", executeTransfer);
      const gasLimit = await calculateGasLimit(contract, "borrow", [
        value,
        tbaAddress,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.borrow(value, tbaAddress!, gas);
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
