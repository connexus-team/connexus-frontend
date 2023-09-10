import { useEligibility } from "@/hooks/useEligibility";
import useHasProfileData from "@/hooks/useHasProfileData";
import { useMintStore } from "@/stores";
import { useWhitelistStore } from "@/stores/whitelistStore";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";

type Props = {
  address: string;
};

export function ButtonMint({ address }: Props) {
  const { isWhitelisted } = useWhitelistStore();
  const {
    setShowMintModal,
    activeStepIndex,
    setActiveStepIndex,
    setActiveStepDotIndex,
  } = useMintStore();
  const { openConnectModal } = useConnectModal();
  const { handleEligibility, isLoading, buttonText } = useEligibility();
  const hasProfile = useHasProfileData(address)

  const text = isLoading
    ? "Loading..."
    : address
      ? buttonText
      : "connect wallet";

  async function handleMint() {
    setActiveStepIndex(activeStepIndex + 1);
    setActiveStepDotIndex(activeStepIndex + 1);
    setShowMintModal(true);
  }

  async function onCancel() {
    setActiveStepIndex(0);
    setActiveStepDotIndex(0);
    setShowMintModal(false);
  }

  async function onEligibility() {
    if (hasProfile) return toast.error("Already minted");
    await handleEligibility(address);
  }

  return (
    <>
      {isWhitelisted ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={
              "w-full border p-[10px] rounded-lg uppercase text-[22px] font-medium tracking-[2.5px]"
            }
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className={
              "w-full achievements-reward-btn border border-transparent uppercase text-[22px] font-medium tracking-[2.5px]"
            }
            onClick={handleMint}
          >
            Continue
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={`w-full achievements-reward-btn border-2 border-transparent sm:w-auto uppercase text-[22px] font-medium tracking-[2.5px] ${isLoading && "loading-btn"
            }`}
          onClick={address ? onEligibility : openConnectModal}
        >
          {text}
        </button>
      )}
    </>
  );
}
