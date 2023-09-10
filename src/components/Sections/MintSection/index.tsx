import { useAccount } from "wagmi";
import { ButtonMint } from "../../ButtonMint";
import Mint from "@/components/Mint";
import { useGlobalModalStateStore, useMintStore } from "@/stores";
import Stepper from "@/components/Mint/Stepper";
import { useWhitelistStore } from "@/stores/whitelistStore";
import { CheckIcon, ErrorIcon } from "@/components/Icons";
import Image from "next/image";

export function MintSection() {
  const { address } = useAccount();
  const { showMintModal } = useMintStore();
  const { isWhitelisted, isError } = useWhitelistStore();
  const { setIsLoadingPage } = useGlobalModalStateStore();

  return (
    <div className="flex flex-col justify-between">
      <div className="h-1/2 lg:h-[80hv] flex flex-col justify-between items-center relative w-full">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src="/home_img.png"
            alt="home"
            draggable={false}
            className="mt-4"
          />
          {!showMintModal ? (
            <div className="flex flex-col w-[22rem] lg:w-[400px] bg-black absolute top-52 rounded-lg border-2 z-10">
              <div className="border-b w-full h-16 text-[24px] font-medium text-center uppercase flex justify-center items-center">
                {address ? "CREATE YOUR QUEST ID" : "white list Quest ID"}
              </div>
              <div className="p-5 h-full flex flex-col justify-between">
                <div className="w-full  flex flex-col items-center justify-center">
                  {address ? (
                    <div className="pb-5 pt-0 wrap w-full text-center">
                      <h1 className="mb-2 font-normal text-[22px]">
                        Wallet connected
                      </h1>
                      <Stepper />
                      <button
                        type="button"
                        className={`w-full my-4 mt-8 text-start border border-transparent ${
                          isError
                            ? "button-mint-page-failed"
                            : "achievements-reward-btn"
                        } uppercase text-[20px] font-normal tracking-[1px] flex items-center gap-2`}
                        disabled
                      >
                        {!isWhitelisted
                          ? isError
                            ? "Wallet isn't in allowlist"
                            : "Metamask"
                          : "Wallet is in allowlist"}
                        {isError ? <ErrorIcon /> : <CheckIcon />}
                      </button>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-[24px] font-medium text-center">
                        QUEST ID EARLY ACCESS:
                      </h1>
                      <p className="text-[20px] tracking-[1.5px] font-light text-center mb-8 w-[90%]">
                        MINT YOUR QUEST ID AND CLAIM SPECIAL BADGES
                      </p>
                    </>
                  )}
                </div>
                <ButtonMint address={address!} />
              </div>
            </div>
          ) : (
            <Mint />
          )}
        </div>
        <Image
          src="/ggquest_banner.png"
          onLoad={() => setIsLoadingPage(false)}
          height={4000}
          width={10000}
          draggable={false}
          alt="banner"
          className="w-full lg:object-contain lg:h-full h-[20rem]"
        />
      </div>
    </div>
  );
}
