import { Borrow, CardTBA, ERC1967, RWACar } from "@/utils";
import { ethers } from "ethers";

export * from './ITokenize'

export const IERC1967 = new ethers.utils.Interface(
  ERC1967.sepolia.functions
);

export const IRWACar = new ethers.utils.Interface(
  RWACar.sepolia.functions
);

export const ICardTBA = new ethers.utils.Interface(
  CardTBA.sepolia.functions
);

export const IBorrow = new ethers.utils.Interface(
  Borrow.sepolia.functions
);
