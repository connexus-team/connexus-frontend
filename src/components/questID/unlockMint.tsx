// @ts-nocheck
import { useMintStore } from "@/stores/mintStore";
import toast from "react-hot-toast";
import { getAddress } from "viem";
import { useAccount, useSignMessage } from "wagmi";

const UnlockMint = () => {
  const { address } = useAccount();
  const { setMintMessage, getSignedMessage, convertHexToBytes } =
    useMintStore();

  const ggProfiles = getAddress("0x7700B434336ff228404160Aaf7dbFF7CEF491E6c");

  if (!ggProfiles || !address) {
    console.error("ggProfiles or address is undefined or empty");
  }

  const hashedMessage = getSignedMessage(ggProfiles, address);

  if (!hashedMessage) {
    console.error("hashedMessage is undefined or empty");
  }

  const { signMessageAsync, isError, isLoading } = useSignMessage({
    message: convertHexToBytes(hashedMessage),
    onError(err) {
      console.error(err);
    },
  });

  async function SignMessage() {
    try {
      const message = await signMessageAsync();
      if (message) {
        setMintMessage(message);
      }
      console.error("Signed message is undefined or empty");
      toast.success("Signing Successful!");
    } catch (err) {
      toast.error("Signing failed. Please try again.");
    }
  }

  return (
    <div className="p-5 w-full">
      <button
        disabled={isLoading}
        onClick={SignMessage}
        type="button"
        className="achievements-reward-btn border-2 border-transparent w-full text-[22px] font-medium tracking-[2.5px]"
      >
        {isError ? "SIGNING FAILED..." : "CONTINUE"}
      </button>
    </div>
  );
};

export { UnlockMint };
