import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import MyForm from "./MyForm";
import useProfile from "@/hooks/useProfile";
import { IProfile } from "@/interfaces";
import ggProfile from "@/abi/profilesAbi.json";
import { ggProfileAddress } from "@/constants";

const ModalMint = ({ profile = null }: { profile?: IProfile | null }) => {
  const [questID, setQuestID] = useState(false);
  const { address: playerAddress } = useAccount();
  const { data: hasProfileData } = useContractRead({
    address: ggProfileAddress,
    abi: ggProfile,
    functionName: "hasProfileData",
    args: [playerAddress],
  });

  useEffect(() => {
    if (profile && hasProfileData) {
      setQuestID(hasProfileData as boolean);
    }
  }, [profile, hasProfileData]);

  return (
    <>
      <div className="modal modal-bottom sm:modal-middle">
        <div className={"flex justify-center " + (questID ? "" : "")}>
          {questID ? (
            <button className={"button-mint-page"} type="submit">
              You already have a Quest ID, please return to Home
            </button>
          ) : (
            <MyForm />
          )}
        </div>
      </div>
    </>
  );
};

const ModalMintWrapper = () => {
  const { address: playerAddress } = useAccount();
  const profile = useProfile(playerAddress);
  return <ModalMint profile={profile} />;
};

export default ModalMintWrapper;
