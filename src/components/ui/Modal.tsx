import { useMintStore } from "@/stores/mintStore";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, ReactNode } from "react";
import Confetti from "react-confetti";

interface ModalProps {
  icon?: ReactNode;
  title?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "fit-content";
  show: boolean;
  children: ReactNode[] | ReactNode;
  dataTestId?: string;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  show,
  children,
  dataTestId = "",
  onClose,
}) => {
  const showConfetti = useMintStore((state) => state.showConfetti);
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => onClose?.()}
        data-testid={dataTestId}
      >
        {showConfetti && (
          <Confetti className="fixed top-0 left-0 w-screen h-screen" />
        )}
        <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-80" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={clsx(
                "inline-block transform rounded-xl text-left shadow-xl transition-all sm:align-middle"
              )}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
