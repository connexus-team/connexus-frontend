import profileABI from "@/abi/profilesAbi.json";
import { API } from "@/constants";
import useBreakpoints from "@/hooks/useBreakpoints";
import useWindowSize from "@/hooks/useWindowSize";
import { useMintStore } from "@/stores/mintStore";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";

const ggProfiles = "0x7700B434336ff228404160Aaf7dbFF7CEF491E6c";

const updateProfileOnSuccess = async (address: string): Promise<boolean> => {
  try {
    await axios.post(`${API}/player/mint-success`, { address });
    console.log("Profile updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating profile:", error);
    return false;
  }
};

const MintQuestID = () => {
  const { address: playerAddress } = useAccount();
  const {
    mintMessage,
    setActiveStepDotIndex,
    setActiveStepIndex,
    activeStepIndex,
    setIsSuccessful,
    formData,
  } = useMintStore();
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const { width, height } = useWindowSize();
  const { isXs } = useBreakpoints();

  const mintData = {
    pseudo: formData.username,
    profilePictureURL: formData.avatar,
    coverPictureURL: formData.avatar,
  };

  const { data, isLoading, isError, write } = useContractWrite({
    address: ggProfiles,
    abi: profileABI,
    functionName: "mint",
    args: [mintData, mintMessage],
  });

  const {
    isLoading: waitForTxIsLoading,
    isSuccess: waitForTxIsSuccess,
    isError: waitForTxIsError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  async function onAdvance() {
    setActiveStepDotIndex(activeStepIndex + 1);
    setActiveStepIndex(activeStepIndex + 1);
  }

  useEffect(() => {
    if (waitForTxIsLoading) {
      if (!isToastVisible) {
        setIsToastVisible(true);
        toast.success("Transaction is pending...", {
          style: {
            border: "1px solid #713200",
            padding: "12px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    }
    if (isError || waitForTxIsError) {
      toast.error("Transaction failed...");
    }
    if (waitForTxIsSuccess) {
      toast.success("Congratulations, you minted your QuestID!");
      setActiveStepDotIndex((prevIndex: number) => prevIndex + 1);
      setIsSuccessful(true);
      updateProfileOnSuccess(playerAddress as string).then((success) => {
        setIsProfileUpdated(success);
      });
      onAdvance();
    }
  }, [
    waitForTxIsSuccess,
    waitForTxIsLoading,
    waitForTxIsError,
    isError,
    isToastVisible,
  ]);

  return (
    <>
      {waitForTxIsLoading || isLoading ? (
        <div className="p-5 w-full">
          <button
            className="loading-btn w-full achievements-reward-btn border-2 border-transparent uppercase text-[22px] font-medium tracking-[2.5px]"
            disabled
          >
            Loading...
          </button>
        </div>
      ) : waitForTxIsSuccess ? (
        isProfileUpdated ? (
          <>
            <div
              className={clsx(
                "fixed top-0",
                isXs ? "right-[400px]" : "right-[800px]"
              )}
            >
              <Confetti width={width} height={height} />
            </div>

            <a href="/dashboard">
              <button
                className="w-full achievements-reward-btn border-2 border-transparent uppercase text-[22px] font-medium tracking-[2.5px]"
                type="button"
              >
                Congratulations, you minted your Quest ID!
              </button>
            </a>
          </>
        ) : (
          <button
            className="loading-btn w-full achievements-reward-btn border-2 border-transparent uppercase text-[22px] font-medium tracking-[2.5px]"
            disabled
          >
            Loading Profile...
          </button>
        )
      ) : (
        <div className="p-5 w-full">
          <button
            className="achievements-reward-btn border-2 border-transparent w-full text-[22px] font-medium uppercase tracking-[2.5px]"
            type="submit"
            disabled={!write}
            onClick={() => write?.()}
          >
            {isError || waitForTxIsError
              ? "Transaction Failed"
              : "MINT YOUR QUEST ID"}
          </button>
        </div>
      )}
    </>
  );
};

export { MintQuestID };
