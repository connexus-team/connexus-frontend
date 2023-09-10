/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StdError, StdErrorInterface } from "../../StdError.sol/StdError";

const _abi = [
  {
    inputs: [],
    name: "arithmeticError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divisionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "encodeStorageError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enumConversionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexOOBError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "memOverflowError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "popError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroVarError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61028d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c8063986c5f6811610080578063b67689da11610065578063b67689da146100f8578063d160e4de14610100578063fa784a441461010857600080fd5b8063986c5f68146100e8578063b22dc54d146100f057600080fd5b806305ee8612146100b257806310332977146100d05780631de45560146100d85780638995290f146100e0575b600080fd5b6100ba610110565b6040516100c79190610209565b60405180910390f35b6100ba610179565b6100ba61018b565b6100ba61019d565b6100ba6101af565b6100ba6101c1565b6100ba6101d3565b6100ba6101e5565b6100ba6101f7565b604051603260248201526044015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4e487b710000000000000000000000000000000000000000000000000000000017905281565b6040516001602482015260440161011e565b6040516021602482015260440161011e565b6040516011602482015260440161011e565b6040516041602482015260440161011e565b6040516031602482015260440161011e565b6040516051602482015260440161011e565b6040516022602482015260440161011e565b6040516012602482015260440161011e565b600060208083528351808285015260005b818110156102365785810183015185820160400152820161021a565b506000604082860101526040601f19601f830116850101925050509291505056fea2646970667358221220bb338329a857c7e4f6ee89c838dff2dd6061dd735c5cbffe28c95b26e4e0bf4864736f6c63430008130033";

type StdErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdError> {
    return super.deploy(overrides || {}) as Promise<StdError>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError {
    return super.attach(address) as StdError;
  }
  override connect(signer: Signer): StdError__factory {
    return super.connect(signer) as StdError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new utils.Interface(_abi) as StdErrorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError {
    return new Contract(address, _abi, signerOrProvider) as StdError;
  }
}
