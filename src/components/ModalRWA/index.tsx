"use client";

import { useContractERC1967 } from "@/hooks";
import useModalStore from "@/stores/modal";
import Image from "next/image";
import { useForm } from "react-hook-form";

type ModalProps = {
  visible: boolean;
};

export default function ModalRWA({ visible }: ModalProps) {
  const { toggleVisibleRWA } = useModalStore();
  const { onTokenizeCar, onTokenizeRealState } = useContractERC1967();
  const { handleSubmit, register } = useForm<any>();

  async function onTokenize(values: any) {
    const isCard = true //values.car
    if (isCard) {
      const payload = {
        numberChassi: values.numberChassi,
        doclink: values.doclink,
      };
      return await onTokenizeCar(payload);
    }
    const payload = {
      number: values.number,
      linkdoc: values.doclink,
      fraction: values.fraction,
    };
    return await onTokenizeRealState(payload);
  }

  if (visible) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/70">
        <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-8">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">Tokenize your asset</span>
            <button onClick={toggleVisibleRWA}>
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
          <div className="my-2 text-lg">Choose the RWA</div>
          <form onSubmit={handleSubmit(onTokenize)}>
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
            <div className="my-2 text-black/50">Asset Value</div>
            <input
              {...register("value", { required: true })}
              defaultValue={"0"}
              className="w-72 border-2 bg-dropDown p-2"
              type="text"
            />
            <div className="my-4 text-lg font-semibold">Asset Information</div>

            <div className="flex justify-between gap-5">
              <div>
                <div className="my-2 text-black/50">Car model Brand</div>
                <input
                  {...register("model", { required: true })}
                  className="w-72 border-2 bg-dropDown p-2"
                  type="text"
                />
                <div className="my-2 text-black/50">Mileage</div>
                <input
                  {...register("mileage", { required: true })}
                  className="w-72 border-2 bg-dropDown p-2"
                  type="text"
                />
                <div className="my-2 text-black/50">
                  Registration certificate (CRLV)
                </div>
                <input
                  {...register("doclink", { required: true })}
                  className="w-72 border-2 bg-dropDown p-2"
                  type="text"
                />
              </div>
              <div>
                <div className="my-2 text-black/50">Year</div>
                <input
                  {...register("year", { required: true })}
                  className="w-72 border-2 bg-dropDown p-2"
                  type="text"
                />
                <div className="my-2 text-black/50">Chassis number</div>
                <input
                  {...register("numberChassi", { required: true })}
                  className="w-72 border-2 bg-dropDown p-2"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <button
                className="border-2 p-2 text-black/50"
                onClick={toggleVisibleRWA}
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
