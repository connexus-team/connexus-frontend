import { ITxData } from "@/interfaces";
import type SmartAccount from "@biconomy/smart-account";
import toast from "react-hot-toast";

export function useSendTransactions(smartAccount: SmartAccount) {
  async function onSendTransactions(TxData: ITxData[]) {
    if (!smartAccount) return null;
    smartAccount.on("txHashGenerated", (response: any) => {
      toast.loading(`txHashGenerated event received via emitter ${response}`);
    });

    smartAccount.on("txMined", async (response: any) => {
      toast.loading(`txMined event received via emitter ${response}`);
    });

    smartAccount.on("error", (response: any) => {
      toast.error("error event received via emitter", response);
    });
    console.log(TxData);
    try {
      console.log(await smartAccount.sendTransactionBatch)
      const txResponse = await smartAccount.sendTransactionBatch({
        transactions: TxData,
      });
      console.log(txResponse)
    } catch (error) {
      console.error("txResponse: ", error)
    }
    /* console.log("txResponse: ", txResponse);
    toast.loading(`Gerando o hash de transação: ${txResponse}`);

    const txReciept = await txResponse.wait();
    console.log("txReciept: ", txReciept);
    toast.success(`Seu NFT foi Mintado com sucesso!`);
    toast.success(`Hash Minerado: ${txReciept.transactionHash}`);
    return txReciept.transactionHash; */
  }

  return { onSendTransactions };
}
