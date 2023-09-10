import Stepper from "../Stepper";
import { HeaderForms } from "../HeaderForms";
import { Controller, useForm, FieldError } from "react-hook-form";
import { MintResolve } from "@/validations";
import { useMintStore } from "@/stores";

interface FormValues {
  username: string | undefined;
}

const Form1 = () => {
  const {
    activeStepIndex,
    setActiveStepIndex,
    activeStepDotIndex,
    setActiveStepDotIndex,
    setFormData,
  } = useMintStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: MintResolve as any,
  });

  const onSubmit = async (values: FormValues) => {
    setFormData(values);
    setActiveStepIndex(activeStepIndex + 1);
    setActiveStepDotIndex(activeStepDotIndex + 1);
  };

  const RenderErrorMessage = () => {
    if (errors.username) {
      return (
        <p className="text-base text-red-500 mt-1" id="username-error">
          {(errors.username as FieldError)?.message}
        </p>
      );
    }
    return null;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center modal-mint-quest"
    >
      <HeaderForms />
      <div className="p-5 wrap w-full text-center">
        <h1 className="mb-4 font-normal text-[22px]">Choose a username</h1>
        <Stepper />
      </div>
      <div className="flex flex-col items-start px-5 mt-4 mb-2 w-full">
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <input
              {...field}
              autoFocus
              autoComplete="off"
              className={`w-full p-2 py-3 rounded-md bg-[rgba(255,255,255,.10)] ring-1 ring-[rgba(255,255,255,.30)]`}
              placeholder="Choose a unique username"
              aria-invalid={errors.username ? "true" : "false"}
            />
          )}
        />
        <RenderErrorMessage />
      </div>
      <div className="p-5 w-full">
        <button className="achievements-reward-btn border-2 border-transparent w-full py-4 px-6 tracking-[2.5px] uppercase text-[22px] font-medium">
          Select username
        </button>
      </div>
    </form>
  );
};

export default Form1;
