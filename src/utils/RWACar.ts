import rwacarABI from "../abi/rwacar.json";

export const RWACar = {
  sepolia: {
    contractAddress:
      "0xDe9Bf698005a3BaF2d253d87d18dDa18136A8fE7" as `0x${string}`,
    abi: rwacarABI,
    functions: [
      "function safeTrasferFrom(address _from, address _to, uint256 _tokenId)",
      "function setApprovalForAll(address _operator, boll _approved)",
    ],
  },
};
