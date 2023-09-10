import { useEffect } from "react";
import { useMintStore } from "@/stores";

const Stepper = () => {
  const { activeStepDotIndex } = useMintStore();

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    const borderItems = document.querySelectorAll(".border-item");

    stepperItems.forEach((step, i) => {
      if (i <= activeStepDotIndex) {
        step.classList.add("border-circle-item");
        step.classList.remove("border-[.08em]");
      } else {
        step.classList.remove("border-circle-item");
      }
    });
    borderItems.forEach((step, i) => {
      if (i < activeStepDotIndex) {
        step.classList.add("border-item-color");
      } else {
        step.classList.remove("border-item-color");
      }
    });
  }, [activeStepDotIndex]);

  return (
    <div className="w-[100%] flex flex-row items-center justify-center px-100 py-1">
      <div className="stepper-item w-2 h-2 text-center font-medium border-[.08em] bg-white rounded-full"></div>
      <div className="border-item flex-auto border-t-2"></div>
      <div className="stepper-item w-2 h-2 text-center font-medium border-[.08em] bg-white rounded-full"></div>
      <div className="border-item flex-auto border-t-2"></div>
      <div className="stepper-item w-2 h-2 text-center font-medium border-[.08em] bg-white rounded-full"></div>
      <div className="border-item flex-auto border-t-2"></div>
      <div className="stepper-item w-2 h-2 text-center font-medium border-[.08em] bg-white rounded-full"></div>
      <div className="border-item flex-auto border-t-2"></div>
      <div className="stepper-item w-2 h-2 text-center font-medium border-[.08em] bg-white rounded-full"></div>
    </div>
  );
};

export default Stepper;
