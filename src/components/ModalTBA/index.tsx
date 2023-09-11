import useModalStore from "@/stores/modal";
import OrangeButton from "../OrangeButton";
import { useContractERC1967 } from "@/hooks";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

type ModalTBAProps = {
  visible: boolean;
};

export default function ModalTBA({ visible }: ModalTBAProps) {
  const { toggleVisibleTBA } = useModalStore();
  const { onCreateTBA } = useContractERC1967();
  const { handleSubmit, register } = useForm<any>();
  const { address } = useAccount();

  async function onCreate(values: { address: `0x${string}` }) {
    await onCreateTBA(values.address);
  }

  if (visible) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/70">
        <form
          onSubmit={handleSubmit(onCreate)}
          className="fixed left-[50%] top-[50%] w-[626px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-8"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">CREATE-TBACARD</span>
            <button onClick={toggleVisibleTBA}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="my-2 text-black/50">Address</div>

          <input
            {...register("address", { required: true })}
            defaultValue={address}
            className="w-72 border-2 bg-dropDown p-2"
            type="text"
          />

          <div className="flex justify-end">
            <OrangeButton text="Continue" />
          </div>
        </form>
      </div>
    );
  }
}
