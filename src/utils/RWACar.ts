import rwacarABI from "../abi/rwacar.json";

export const RWACar = {
  sepolia: {
    contractAddress:
      "0x89Ab74EC3799B98033bFfC3b08429B45BAaf5cD4" as `0x${string}`,
    abi: rwacarABI,
    functions: [
      "function safeTrasferFrom(address _from, address _to, uint256 _tokenId)",
      "function setApprovalForAll(address 0x70B122d4c2C9A007e9258a6B507bdBaaade03EBD, boll true)",
      "function setManagement(address _management)",
    ],
  },
};
