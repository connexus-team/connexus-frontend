import { ERC1967 } from "@/utils";
import { ethers } from "ethers";

export * from './ITokenize'

export const Ierc1967 = new ethers.utils.Interface(
  ERC1967.sepolia.functions
);
