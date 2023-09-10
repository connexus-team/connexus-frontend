import { ITxData, Ierc1967 } from "@/interfaces";
import { ERC1967 } from "@/utils";

export function useGenerateTransferData() {
  async function onGenerateTransferData(
    address: string,
    addressSigner: `0x${string}`,
    tokenId: number
  ): Promise<ITxData> {
    const data = Ierc1967.encodeFunctionData("safeTransferFrom", [
      address,
      addressSigner,
      tokenId,
    ]);

    return {
      to: ERC1967.sepolia.contractAddress,
      data,
    };
  }

  return { onGenerateTransferData };
}
