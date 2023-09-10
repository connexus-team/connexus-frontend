"use client";
import { useSmartContext } from "@/contexts";
import { useContracts } from "@/hooks/useContracts";

export default function Home() {
  const { smartAccount } = useSmartContext();
  const { onCreateTBA, onTokenizeCar, onTokenizeRealState, isLoading } =
    useContracts(smartAccount!);

  async function onFunction() {
    const Tx = await onCreateTBA(smartAccount?.owner!);
    console.log(Tx);
  }

  return (
    <main className="flex h-screen items-center  justify-center bg-black">
      <button
        className="rounded-xl bg-white p-10 transition-all duration-300 ease-in-out hover:bg-opacity-70 active:scale-95"
        onClick={onFunction}
      >
        APERTE PARA REALIZAR A FUNÇÃO
      </button>
    </main>
  );
}
