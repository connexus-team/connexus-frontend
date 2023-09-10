import borrow_ABI from "../abi/borrow.json";

export const Borrow = {
  sepolia: {
    contractAddress:
      "0x6A5944Eb95272a37e48A11A6F71fEA539f940dd1" as `0x${string}`,
    abi: borrow_ABI,
    functions: [
      "function borrow(valueBorrowed _value, address payable _tba)",
      "function stakeCar(uint256 _tokenId, address payable _tba)",
      "function stakeRealState(uint256 _tokenId, uint256 _amount, address payable _tba)",
    ],
  },
};
