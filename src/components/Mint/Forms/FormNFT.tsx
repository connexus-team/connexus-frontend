import "react-loading-skeleton/dist/skeleton.css";
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Stepper from "../Stepper";
import { functions } from "../functions";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { useMintStore } from "@/stores";

const FormNFT = () => {
  const {
    activeStepIndex,
    setActiveStepIndex,
    activeStepDotIndex,
    setActiveStepDotIndex,
    formData,
    setFormData,
  } = useMintStore();
  const [isSelectedNFT, setNFT] = useState(false);
  const [network, setNetwork] = useState("ethereum");
  const [token, setToken] = useState(0);
  const [contractAddress, setContractAddress] = useState("");
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { getNetwork, isBlank } = functions;

  const handleSelectNFT = async () => {
    const settings = {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      network: getNetwork(network, Network),
    };
    const alchemy = new Alchemy(settings);
    const resp = alchemy.nft.getNftMetadata(contractAddress, token);
    resp.then((va) => {
      const imgUrl = va.rawMetadata?.image;
      if (imgUrl !== undefined) {
        if (imgUrl && imgUrl.startsWith("ipfs")) {
          console.log(
            "IS IT GOOD //// https://ipfs.io/ipfs/" + imgUrl.substring(7)
          );
          setUrl("https://ipfs.io/ipfs/" + imgUrl.substring(7));
        } else {
          console.log("url is " + imgUrl);
          setUrl(imgUrl);
        }
      } else {
        console.log("FAILED NFT ");
      }
    });

    setDisabled(true);
    setNFT(true);
  };

  const validateNFTContract = async (contract: string) => {
    let err = "";
    if (isBlank(contract)) {
      err = "contract cannot be blank";
      return err;
    }
    const settings = {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      network: getNetwork(network, Network),
    };

    const alchemy = new Alchemy(settings);
    const resp = alchemy.nft.getNftMetadata(contract, token);
    resp
      .then((va) => {
        const imgUrl = va.rawMetadata?.image;
        if (imgUrl === undefined || imgUrl === "") {
          err = "Invalid NFT Contract";
          return err;
        } else {
          setContractAddress(contract);
          return;
        }
      })
      .catch((error) => {
        err = "Invalid NFT Contract";
        console.log("error ; " + error);
        console.log("err ; " + err);

        return err;
      });
  };

  async function onSubmit(values: any) {
    const va = {
      avatarNFT: url,
      avatar: "",
    };
    const data = { ...formData, ...values, ...va };
    setFormData(data);
    setActiveStepIndex(activeStepIndex + 1);
    setActiveStepDotIndex(activeStepDotIndex + 1);
  }

  const { control, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center modal-mint-quest mt-10"
    >
      <div className="row">
        <button onClick={() => setActiveStepIndex(activeStepIndex - 8)}>
          <FaChevronLeft />
        </button>
        <h1 className="p-5">CREATE YOUR QUEST ID</h1>
      </div>
      <div className="row wrap py-6">
        <h1 className="pb-4">Choose your picture</h1>
        <Stepper />
      </div>
      <div className="row p-3">{formData.username}</div>
      {isSelectedNFT === false ? (
        <div className="row-nft-data flex-col py-7">
          <h1 className="mb-2">FILL YOUR NFT DATA BELOW</h1>
          <div className="">
            <div className="flex flex-row py-4">
              <div className="flex flex-col mr-10">
                <h4 className="text-sm">CHAIN</h4>
                <select
                  className="select-nft-network"
                  value={network}
                  onChange={(e) => {
                    setNetwork(e.target.value);
                  }}
                >
                  <option value="ethereum">Ethereum</option>
                  <option value="polygon">Polygon</option>
                  <option value="optimism">Optimism</option>
                  <option value="arbitrum">Arbitrum</option>
                </select>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">TOKEN</h4>
                <input
                  className="input-nft"
                  value={token}
                  onChange={(e) => {
                    setToken(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm">CONTRACT ADRESS</h4>
              <Controller
                control={control}
                name="contractNFTAddress"
                render={({ field }) => (
                  <input
                    {...field}
                    className="input-nft rounded-md text-white bg-slate-900 p-2 w-full"
                    placeholder="Enter NFT contract"
                    onChange={({ target }) => validateNFTContract(target.value)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      ) : (
        <Image
          alt="image"
          src={url}
          width={170}
          height={170}
          unoptimized={true}
          className="mb-10"
        />
      )}

      <div
        className={"row px-4 flex flex-col" + (isSelectedNFT ? " py-2" : "")}
      >
        <button
          className="button-mint-page m-5"
          type="button"
          onClick={handleSelectNFT}
          disabled={disabled}
        >
          {isSelectedNFT ? "NFT SELECTED" : "SELECT NFT"}
        </button>
        {isSelectedNFT ? (
          <button className="button-mint-page mb-5" type="submit">
            NEXT
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default FormNFT;
