/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRWACar, IRWACarInterface } from "../IRWACar";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "_mintWithTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberChassi",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "doclink",
        type: "string",
      },
      {
        internalType: "address",
        name: "accountOrTBA",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRWACar__factory {
  static readonly abi = _abi;
  static createInterface(): IRWACarInterface {
    return new utils.Interface(_abi) as IRWACarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRWACar {
    return new Contract(address, _abi, signerOrProvider) as IRWACar;
  }
}
