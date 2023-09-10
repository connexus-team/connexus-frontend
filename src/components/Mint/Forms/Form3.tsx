import React from "react";
import Stepper from "../Stepper";
import { HeaderForms } from "../HeaderForms";
import { IconPen } from "@/components/Icons";
import { useMintStore } from "@/stores";
import { UnlockMint, MintQuestID } from "@/components/questID";

const Form3 = () => {
  const { mintMessage, setActiveStepIndex, setActiveStepDotIndex, formData } =
    useMintStore();

  const textTop = mintMessage
    ? "Mint your Quest ID"
    : "Sign transaction in your wallet";

  return (
    <div className="flex flex-col justify-center items-center modal-mint-quest">
      <HeaderForms />
      <div className="p-5 wrap w-full text-center">
        <h1 className="mb-4 font-normal text-[22px]">{textTop}</h1>
        <Stepper />
      </div>
      <div className="mb-4 font-normal text-[22px] flex justify-between items-center w-full px-5">
        {formData.username}
        <IconPen
          onClick={() => {
            setActiveStepIndex(1);
            setActiveStepDotIndex(1);
          }}
        />
      </div>

      {formData.avatar && (
        <div className="h-[10rem] w-[10rem] my-4 bg-[#131313] border-2 border-[rgba(255,255,255,0.50)] rounded-md">
          <img
            draggable={false}
            src={formData.avatar}
            alt="Your avatar"
            className="h-full w-full object-cover rounded"
          />
        </div>
      )}
      {!mintMessage ? <UnlockMint /> : <MintQuestID />}
    </div>
  );
};

export default Form3;
