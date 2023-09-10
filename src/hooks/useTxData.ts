import { ITxData, Ierc1967 } from "@/interfaces";
import { ERC1967 } from "@/utils";

export function useTxData() {
  async function onCreateTBACard(address: string): Promise<ITxData> {
    const data = Ierc1967.encodeFunctionData("createConnexusCard", [address]);
    
    return {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
  }

  async function onTokenizeCarTX(
    tbaAddress: string,
    numberChassi: number,
    doclink: string
  ): Promise<ITxData> {
    const data = Ierc1967.encodeFunctionData("tokenizeCar", [
      tbaAddress,
      numberChassi,
      doclink,
    ]);

    return {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
  }

  async function onTokenizeRealStateTX(
    tbaAddress: string,
    numberChassi: number,
    doclink: string,
    fraction: number
  ): Promise<ITxData> {
    const data = Ierc1967.encodeFunctionData("tokenizeRealState", [
      tbaAddress,
      numberChassi,
      doclink,
      fraction,
    ]);

    return {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
  }

  return { onCreateTBACard, onTokenizeCarTX, onTokenizeRealStateTX };
}
