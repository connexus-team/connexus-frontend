import { useState } from "react";
import { ITokenizeCarPayload, ITokenizeRealStatePayload } from "@/interfaces";
import { Management__factory } from "@/contracts";
import { ERC1967, getEthersProvider, calculateGasLimit } from "@/utils";
import { useAuthContext } from "@/contexts";

export function useContractERC1967() {
  const [isLoading, setIsLoading] = useState(false);
  const { onSetTBA, tbaAddress } = useAuthContext();
  const provider = getEthersProvider();
  const signer = provider?.getSigner();
  const factory = new Management__factory(signer);
  const contract = factory.attach(ERC1967.sepolia.contractAddress);

  async function onCreateTBA(addressSigner: `0x${string}`) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "createConnexusCard", [
        addressSigner,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.createConnexusCard(addressSigner, gas);
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      const event = tx.events?.find((e) => e.event === "tbaAddr");
      const tbaAddress: `0x${string}` = event?.args ? event.args[0] : "";
      onSetTBA(tbaAddress);
      console.log(tbaAddress);
      setIsLoading(false);
      return tbaAddress;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onCreateBankTBA(collection: `0x${string}`, tokenId: number) {
    setIsLoading(true);
    try {
      const gasLimit = await calculateGasLimit(contract, "createBankTBACard", [
        collection,
        tokenId,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.createBankTBACard(
        collection,
        tokenId,
        gas
      );
      const receipt = await transaction.wait();
      console.log(receipt);
      const event = receipt.events?.find((event) => event.event === "tbaAddr");
      const tbaAddress: string = event?.args ? event.args[0] : "";
      setIsLoading(false);
      return tbaAddress;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  async function onTokenizeCar(payload: ITokenizeCarPayload) {
    setIsLoading(true);
    try {
      const { numberChassi, doclink } = payload;
      console.log(tbaAddress, numberChassi, doclink);
      if (!tbaAddress) return;
      const gasLimit = await calculateGasLimit(contract, "tokenizeCar", [
        tbaAddress,
        numberChassi,
        doclink,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.tokenizeCar(
        tbaAddress!,
        numberChassi,
        doclink,
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

  async function onTokenizeRealState(payload: ITokenizeRealStatePayload) {
    setIsLoading(true);
    try {
      const { numberChassi, doclink, fraction } = payload;
      const gasLimit = await calculateGasLimit(contract, "tokenizeRealState", [
        tbaAddress,
        numberChassi,
        doclink,
        fraction,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.tokenizeRealState(
        tbaAddress!,
        numberChassi,
        doclink,
        fraction,
        gas
      );
      const tx = await transaction.wait();
      console.log(tx);
      setIsLoading(false);
      return tx;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onCreateTBA,
    onTokenizeCar,
    onTokenizeRealState,
    onCreateBankTBA,
  };
}
