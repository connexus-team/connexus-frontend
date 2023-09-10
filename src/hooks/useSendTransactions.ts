import type { ITxData } from "@/interfaces";
import type SmartAccount from "@biconomy/smart-account";
import type { ChainId } from "@biconomy/core-types";
import toast from "react-hot-toast";
import { sepolia } from "wagmi";

export function useSendTransactions(smartAccount: SmartAccount) {
  async function onSendTransactions(txData: ITxData[]) {
    try {
      console.log("smartAccount: ", !!smartAccount);
      if (!smartAccount) return null;
      smartAccount.on("txHashGenerated", (response: string) => {
        toast.loading(`txHashGenerated event received via emitter ${response}`);
      });
      smartAccount.on("txMined", (response: string) => {
        toast.loading(`txMined event received via emitter ${response}`);
      });
      smartAccount.on("error", (response: string) => {
        toast.error(`error event received via emitter ${response}`);
      });

      console.log("TxData: ", txData);
      const txResponse = await smartAccount.sendTransaction({
        transaction: txData[0],
      });
      console.log("txResponse: ", txResponse);
      toast.loading(`Gerando o hash de transação: ${txResponse}`);

      const txReciept = await txResponse.wait();
      console.log("txReciept: ", txReciept);
      toast.success(`Seu NFT foi Mintado com sucesso!`);
      toast.success(`Hash Minerado: ${txReciept.transactionHash}`);
      return txReciept.transactionHash;
    } catch (error) {
      console.error("txResponse: ", error);
    }
  }

  return { onSendTransactions };
}
