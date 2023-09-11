import borrow_ABI from "../abi/borrow.json";

export const Borrow = {
  sepolia: {
    contractAddress:
      "0x70B122d4c2C9A007e9258a6B507bdBaaade03EBD" as `0x${string}`,
    abi: borrow_ABI,
    functions: [
      "function borrow(valueBorrowed _value, address payable _tba)",
      "function stakeCar(uint256 _tokenId, address payable _tba)",
      "function stakeRealState(uint256 _tokenId, uint256 _amount, address payable _tba)",
    ],
  },
};
