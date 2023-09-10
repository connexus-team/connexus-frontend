import erc1967_ABI from "../abi/erc1967.json";

export const ERC1967 = {
  sepolia: {
    contractAddress:
      "0x92F67523bd01f76360E0e473d72494c938777e59" as `0x${string}`,
    abi: erc1967_ABI,
    functions: [
      "function createConnexusCard(address _to)",
      "function createBankTBACard(address _collection, uint256 _tokenId)",
      "function tokenizeCar(address payable _tba, uint256 _numberChassi, string memory _doclink)",
      "function tokenizeRealState(address payable _tba, uint256 _numberChassi, string memory _doclink, uint256 _fraction)",
    ],
  },
};
