import cardTba_abi from "../abi/card_tba.json";

export const CardTBA = {
  sepolia: {
    contractAddress:
      "0x078DfC95371787066f3F26f2B8F903494Ac4f2aB" as `0x${string}`,
    abi: cardTba_abi,
    functions: [
      "function execute(address _to, uint256 _value, bytes calldata _data)",
    ],
  },
};
