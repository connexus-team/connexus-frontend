import cardTba_abi from "../abi/card_tba.json";

export const CardTBA = {
  sepolia: {
    contractAddress:
      "0xa449F502407Bdce99FCab9A654198043d60942bd" as `0x${string}`,
    abi: cardTba_abi,
    functions: [
      "function execute(address _to, uint256 _value, bytes calldata _data)",
    ],
  },
};
