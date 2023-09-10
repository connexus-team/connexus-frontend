import { useMintStore } from "@/stores";
import { FaChevronLeft, FaTimes } from "react-icons/fa";

export function HeaderForms() {
  const {
    setShowMintModal,
    activeStepIndex,
    setActiveStepIndex,
    setActiveStepDotIndex,
  } = useMintStore();

  async function onCancel() {
    setShowMintModal(false);
    setActiveStepIndex(0);
    setActiveStepDotIndex(0);
  }

  async function onSetStep() {
    setActiveStepIndex(activeStepIndex - 1);
    setActiveStepDotIndex(activeStepIndex - 1);
  }

  return (
    <div className="border-b w-full h-16 text-[24px] font-medium text-center uppercase flex justify-center items-center">
      {activeStepIndex !== 4 && (
        <div
          className="ring-1 ring-white p-1 absolute left-4 rounded cursor-pointer"
          onClick={onSetStep}
        >
          <FaChevronLeft size={14} />
        </div>
      )}
      <div
        className="ring-1 ring-white p-1 absolute right-4 rounded cursor-pointer"
        onClick={onCancel}
      >
        <FaTimes size={14} />
      </div>
      {activeStepIndex !== 4 ? (
        "CREATE YOUR QUEST ID"
      ) : (
        <img src="/questID.png" alt="questID" className="absolute" />
      )}
    </div>
  );
}
