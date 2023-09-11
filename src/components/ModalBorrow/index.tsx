"use client";

import useModalStore from "@/stores/modal";
import Image from "next/image";
import Dropdown from "../Dropdown";
import { useForm } from "react-hook-form";
import { useContractBorrow } from "@/hooks";

type ModalProps = {
  visible: boolean;
};

export default function ModalBorrow({ visible }: ModalProps) {
  const { toggleVisibleBorrow } = useModalStore();
  const { onBorrow } = useContractBorrow();
  const { handleSubmit } = useForm<any>();

  async function onCreate(values: { number: number }) {
    await onBorrow(values.number);
  }

  if (visible) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/70">
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-8">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">Borrow</span>
            <button onClick={toggleVisibleBorrow}>
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
          <div className="my-2 text-lg">Choose your asset</div>
          <form onSubmit={handleSubmit(onCreate)}>
            <div className="flex items-center gap-3">
              <Image
                className=""
                src={"/car.svg"}
                width={30}
                height={0}
                alt="car-icon"
              />
              <input type="radio" />
              <Image
                className=""
                src={"/house.svg"}
                width={30}
                height={0}
                alt="house-icon"
              />
              <input type="radio" />
            </div>
            <div className="my-2 text-black/50">Borrow Value</div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-black/50">U$ 1.000</span>
              <input type="radio" />
              <span className="font-semibold text-black/50">U$ 5.000</span>
              <input type="radio" />
              <span className="font-semibold text-black/50">U$ 10.000</span>
              <input type="radio" />
            </div>

            <div className="flex gap-5">
              <div>
                <div className="my-2 text-black/50">ID</div>
                <input className="w-72 border-2 bg-dropDown p-2" type="text" />
              </div>
              <div>
                <div className="my-2 text-black/50">Address cardTBA</div>
                <input className="w-72 border-2 bg-dropDown p-2" type="text" />
              </div>
            </div>

            <div className="my-5 text-xl font-semibold">Specifications</div>
            <div className="mb-1 text-black/50">Select Network</div>
            <Dropdown />

            <div className="mt-5 text-black/50">Select asset</div>
            <div className="mt-4 flex gap-3">
              <div className="flex items-center">
                <Image
                  src={"/brazil.svg"}
                  width={25}
                  height={0}
                  alt="brazil-icon"
                />
                <span className="mx-2 font-semibold">WDREXtr</span>
                <input type="radio" />
              </div>
              <div className="flex items-center">
                <Image src={"/usd.svg"} width={25} height={0} alt="usd-icon" />
                <span className="mx-2 font-semibold">USD</span>
                <input type="radio" />
              </div>
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <button
                className="border-2 p-2 text-black/50"
                onClick={toggleVisibleBorrow}
              >
                Cancel
              </button>
              <button className="bg-lightGray p-2 text-gray-300">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
