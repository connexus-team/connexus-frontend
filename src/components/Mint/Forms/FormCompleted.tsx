import { useForm } from "react-hook-form";
import { useMintStore } from "@/stores";
import { HeaderForms } from "../HeaderForms";

const FormCompleted = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useMintStore();

  async function onSubmit(values: any) {
    const data = { ...formData, ...values };
    setFormData(data);
    setActiveStepIndex(activeStepIndex + 1);
  }
  const { handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center modal-mint-quest"
    >
      <HeaderForms />
      <div className="p-5 wrap w-full text-center">
        <h1 className="font-normal text-[22px]">QUEST ID SOULBOUND TOKEN</h1>
      </div>

      {formData.avatar ? (
        <div className="h-1/2 w-[80%] p-4 bg-[#131313] border border-[rgba(255,255,255,0.50)] rounded-md">
          <img
            src={formData.avatar}
            alt="avatar"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-1/2 w-[80%] p-4 bg-[#131313] border border-[rgba(255,255,255,0.50)] rounded-md">
          <img
            src="/bannerGif.gif"
            alt="gif"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="text-center font-normal text-[22px] w-full px-5 py-2">
        @{formData.username}
      </div>

      <a
        href={`https://twitter.com/intent/tweet?text=I%20just%20completed%20my%20mint%20of%20my%20questID%20@${formData.username},%20do%20yours%20too!%20#ggquest`}
        className="w-full p-5"
      >
        <button
          className="achievements-reward-btn border-2 border-transparent w-full text-[22px] font-medium tracking-[2.5px] relative"
          type="button"
        >
          <svg
            className="absolute top-5 left-5"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
          >
            <path
              d="M16.6264 3.69333C16.6366 3.84026 16.6366 3.98719 16.6366 4.13547C16.6366 8.65372 13.1969 13.8646 6.9074 13.8646V13.8619C5.04945 13.8646 3.2301 13.3324 1.66602 12.329C1.93618 12.3615 2.20769 12.3777 2.47988 12.3784C4.01959 12.3798 5.5153 11.8631 6.72662 10.9118C5.26342 10.8841 3.98032 9.93004 3.53209 8.53726C4.04465 8.63611 4.57278 8.6158 5.07586 8.47835C3.48063 8.15605 2.33295 6.75447 2.33295 5.12674C2.33295 5.11184 2.33295 5.09762 2.33295 5.0834C2.80827 5.34815 3.34047 5.49507 3.88485 5.51132C2.38238 4.50719 1.91925 2.50841 2.82655 0.945681C4.56262 3.08191 7.12407 4.38058 9.87375 4.51803C9.59817 3.33041 9.97464 2.08591 10.863 1.25105C12.2402 -0.0435536 14.4062 0.0228016 15.7008 1.39933C16.4666 1.24834 17.2006 0.967348 17.8723 0.569216C17.617 1.36074 17.0828 2.03309 16.3691 2.46034C17.0469 2.38044 17.7091 2.19898 18.3327 1.92205C17.8736 2.60998 17.2954 3.20921 16.6264 3.69333Z"
              fill="white"
            />
          </svg>
          Share my Quest ID
        </button>
      </a>
    </form>
  );
};

export default FormCompleted;
