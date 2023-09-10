import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useFileUpload from "@/hooks/useFileUpload";
import Stepper from "../Stepper";
import { HeaderForms } from "../HeaderForms";
import { IconPen, UploadIcon } from "@/components/Icons";
import { useMintStore } from "@/stores";
import { Spinner } from "@/components/ui/Spinner";

const Form2 = () => {
  const {
    activeStepIndex,
    formData,
    setFormData,
    setActiveStepIndex,
    setActiveStepDotIndex,
  } = useMintStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleFileUpload, fileUrl, setFileUrl, isSubmitted, isLoading } = useFileUpload();

  const onSubmit = () => {
    setActiveStepIndex(activeStepIndex + 1);
    setActiveStepDotIndex(activeStepIndex + 1);
  };

  const handleFileUploadFunction = (event: any) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file as Blob);
    setFileUrl(fileUrl);
    const data = { ...formData, avatar: fileUrl };
    setFormData(data);
  };

  const { control, handleSubmit } = useForm();
  const imageClass =
    "border border-dashed font-normal text-[20px] mt-8 mb-4 text-[rgba(255,255,255,.60)] rounded bg-[#2C2C2C] h-[8.8rem] w-[21rem] cursor-pointer flex gap-4 justify-center items-center";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center modal-mint-quest"
    >
      <HeaderForms />
      <div className="p-5 wrap w-full text-center">
        <h1 className="mb-4 font-normal text-[22px]">Choose your picture</h1>
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
      {!isSubmitted && !formData.avatar ? (
        <label className={imageClass}>
          <UploadIcon />
          Choose local image
          <Controller
            control={control}
            name="file"
            render={({ field }) => (
              <input
                {...field}
                accept="image/*"
                type="file"
                hidden
                onChange={handleFileUploadFunction}
              />
            )}
          />
        </label>
      ) : isLoading ? (
        <div className={imageClass}>
          <Spinner size="md" variant="success" />
          Uploading Image
        </div>
      ) : (
        <div className="h-[10rem] w-[10rem] my-4 bg-[#131313] border-2 border-[rgba(255,255,255,0.50)] rounded-md">
          <img
            draggable={false}
            src={formData.avatar}
            alt="Your avatar"
            className="h-full w-full object-cover rounded"
          />
        </div>
      )}
      <div className="w-full px-5 pt-5">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border p-1 rounded-lg w-full text-[22px] font-normal tracking-[2.5px] text-center cursor-pointer"
        >
          {isSubmitted ? "Replace Image" : "Choose Local Image"}
        </div>
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <input
              {...field}
              ref={fileInputRef}
              accept="image/*"
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          )}
        />
      </div>
      <div className="px-5 py-4 w-full">
        <button
          className={`border-2 border-transparent achievements-reward-btn w-full text-[22px] font-medium tracking-[2.5px] ${isLoading && "loading-btn"
            }`}
          disabled={isLoading}
          type="submit"
        >
          {fileUrl ? "CONTINUE" : isLoading ? "LOADING..." : "SKIP"}
        </button>
      </div>
    </form>
  );
};

export default Form2;
