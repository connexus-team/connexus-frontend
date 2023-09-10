/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenCallbackHandler,
  TokenCallbackHandlerInterface,
} from "../TokenCallbackHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onERC20Received",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105a5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100715760003560e01c8063bc04f0af11610050578063bc04f0af146100f0578063bc197c8114610106578063f23a6e611461014157600080fd5b806223de291461007657806301ffc9a714610090578063150b7a02146100b8575b600080fd5b61008e6100843660046102a3565b5050505050505050565b005b6100a361009e36600461034e565b61017a565b60405190151581526020015b60405180910390f35b6100d76100c636600461037f565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016100af565b6100a36100fe3660046103ee565b600192915050565b6100d761011436600461045d565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b6100d761014f3660046104f7565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006001600160e01b03198216630a85bd0160e11b14806101c457506001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000145b806101f757506001600160e01b031982167e23de2900000000000000000000000000000000000000000000000000000000145b8061022b57506001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461025557600080fd5b919050565b60008083601f84011261026c57600080fd5b50813567ffffffffffffffff81111561028457600080fd5b60208301915083602082850101111561029c57600080fd5b9250929050565b60008060008060008060008060c0898b0312156102bf57600080fd5b6102c889610231565b97506102d660208a01610231565b96506102e460408a01610231565b955060608901359450608089013567ffffffffffffffff8082111561030857600080fd5b6103148c838d0161025a565b909650945060a08b013591508082111561032d57600080fd5b5061033a8b828c0161025a565b999c989b5096995094979396929594505050565b60006020828403121561036057600080fd5b81356001600160e01b03198116811461037857600080fd5b9392505050565b60008060008060006080868803121561039757600080fd5b6103a086610231565b94506103ae60208701610231565b935060408601359250606086013567ffffffffffffffff8111156103d157600080fd5b6103dd8882890161025a565b969995985093965092949392505050565b6000806040838503121561040157600080fd5b61040a83610231565b946020939093013593505050565b60008083601f84011261042a57600080fd5b50813567ffffffffffffffff81111561044257600080fd5b6020830191508360208260051b850101111561029c57600080fd5b60008060008060008060008060a0898b03121561047957600080fd5b61048289610231565b975061049060208a01610231565b9650604089013567ffffffffffffffff808211156104ad57600080fd5b6104b98c838d01610418565b909850965060608b01359150808211156104d257600080fd5b6104de8c838d01610418565b909650945060808b013591508082111561032d57600080fd5b60008060008060008060a0878903121561051057600080fd5b61051987610231565b955061052760208801610231565b94506040870135935060608701359250608087013567ffffffffffffffff81111561055157600080fd5b61055d89828a0161025a565b979a969950949750929593949250505056fea2646970667358221220a08cdd0e8fb889cc87c16d8f6902941e49cf53ae1d76eb48944702b3a9f05a2064736f6c63430008130033";

type TokenCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenCallbackHandler__factory extends ContractFactory {
  constructor(...args: TokenCallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TokenCallbackHandler> {
    return super.deploy(overrides || {}) as Promise<TokenCallbackHandler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenCallbackHandler {
    return super.attach(address) as TokenCallbackHandler;
  }
  override connect(signer: Signer): TokenCallbackHandler__factory {
    return super.connect(signer) as TokenCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenCallbackHandlerInterface {
    return new utils.Interface(_abi) as TokenCallbackHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenCallbackHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenCallbackHandler;
  }
}
