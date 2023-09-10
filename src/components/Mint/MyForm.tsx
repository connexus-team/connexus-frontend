import Step from "./Step";

export type DataMintQuest = {
  username: string;
  userAddress: string;
  avatarNFT: string;
  avatar: string;
};

const MyForm = () => {
  return (
    <div className="flex flex-wrap justify-center absolute lg:top-52 top-[25rem] rounded-lg border-2 z-10">
      <Step />
    </div>
  );
};

export default MyForm;
