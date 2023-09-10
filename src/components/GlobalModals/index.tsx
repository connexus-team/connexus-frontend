import { useMintStore } from "@/stores/mintStore";
import type { FC } from "react";
import { RightIcon } from "../Icons/RightIcon";
import ModalMintWrapper from "../Mint";
import { Modal } from "../ui/Modal";

const GlobalModals: FC = () => {
  const { showMintModal, setShowMintModal, setShowConfetti } = useMintStore();

  return (
    <>
      <Modal
        title={`Mint`}
        icon={<RightIcon />}
        show={showMintModal}
        onClose={() => {
          setShowMintModal(false);
          setShowConfetti(false);
        }}
        dataTestId="mint-modal"
      >
        <ModalMintWrapper />
      </Modal>
    </>
  );
};

export default GlobalModals;
