import { useState } from "react";
import {
  Borrow,
  CardTBA,
  RWACar,
  calculateGasLimit,
  getEthersProvider,
} from "@/utils";
import { CardTBA__factory } from "@/contracts";
import { ethers } from "ethers";

export function useContractCardTBA() {
  const [isLoading, setIsLoading] = useState(false);
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const factory = new CardTBA__factory(signer);
  const contract = factory.attach(CardTBA.sepolia.contractAddress);

  async function onExecute(
    value: number, //0
    operation: number //0
  ) {
    setIsLoading(true);
    try {
      const to = RWACar.sepolia.contractAddress;
      const iface = new ethers.utils.Interface(RWACar.sepolia.abi);
      const data = iface.encodeFunctionData("setApprovalForAll", [
        Borrow.sepolia.contractAddress,
        true,
      ]);
      console.log(data);
      const gasLimit = await calculateGasLimit(contract, "execute", [
        to,
        value,
        data,
        operation,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.execute(
        to,
        value,
        data,
        operation,
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
    onExecute,
  };
}
