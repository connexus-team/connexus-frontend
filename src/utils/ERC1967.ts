import erc1967_ABI from "../abi/erc1967.json";

export const ERC1967 = {
  sepolia: {
    contractAddress:
      "0xe53bC3A00eD4CB4500b4d3b3F5C0c1270AB65443" as `0x${string}`,
    abi: erc1967_ABI,
    functions: [
      "function createConnexusCard(address to)",
      "function tokenizeCar(address payable tba, uint256 numberChassi, string memory doclink)",
      "function tokenizeRealState(address payable tba, uint256 numberChassi, string memory doclink, uint256 fraction)",
    ],
  },
};
