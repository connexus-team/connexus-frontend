/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC6551Registry,
  ERC6551RegistryInterface,
} from "../ERC6551Registry";

const _abi = [
  {
    inputs: [],
    name: "AccountCreationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "account",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635e9bc5361461003b578063da7323b31461006a575b600080fd5b61004e6100493660046102da565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e610078366004610328565b6100ac565b60008061008d8787878787610217565b805160209091012090506100a18382610280565b979650505050505050565b6000806100bc8989898989610217565b905060006100d48660001b8380519060200120610280565b90506001600160a01b0381163b156100ef5791506100a19050565b604080516001600160a01b038381168252602082018c90529181018890528891808b1691908d16907f07fba7bba1191da7ee1155dcfa0030701c9c9a9cc34a93b991fc6fd0c9268d8f9060600160405180910390a4858251602084016000f590506001600160a01b038116610190576040517f20188a5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b831561020a57600080826001600160a01b031687876040516101b39291906103d9565b6000604051808303816000865af19150503d80600081146101f0576040519150601f19603f3d011682016040523d82523d6000602084013e6101f5565b606091505b50915091508161020757805160208201fd5b50505b9998505050505050505050565b60408051602081018390529081018590526001600160a01b0384166060828101919091526080820184905290869060a00160408051601f198184030181529082905261026692916020016103e9565b604051602081830303815290604052905095945050505050565b600061028d838330610294565b9392505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b80356001600160a01b03811681146102d557600080fd5b919050565b600080600080600060a086880312156102f257600080fd5b6102fb866102be565b945060208601359350610310604087016102be565b94979396509394606081013594506080013592915050565b600080600080600080600060c0888a03121561034357600080fd5b61034c886102be565b965060208801359550610361604089016102be565b9450606088013593506080880135925060a088013567ffffffffffffffff8082111561038c57600080fd5b818a0191508a601f8301126103a057600080fd5b8135818111156103af57600080fd5b8b60208285010111156103c157600080fd5b60208301945080935050505092959891949750929550565b8183823760009101908152919050565b7f3d60ad80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081526bffffffffffffffffffffffff198360601b1660148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526000825160005b8181101561046e5760208186018101516037868401015201610451565b5060009201603701918252509291505056fea2646970667358221220ff7619af3fdfa6a84664a57cbe1a7ff6dd1748498bf6219835318f212b68410064736f6c63430008130033";

type ERC6551RegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC6551RegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC6551Registry__factory extends ContractFactory {
  constructor(...args: ERC6551RegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ERC6551Registry> {
    return super.deploy(overrides || {}) as Promise<ERC6551Registry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC6551Registry {
    return super.attach(address) as ERC6551Registry;
  }
  override connect(signer: Signer): ERC6551Registry__factory {
    return super.connect(signer) as ERC6551Registry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC6551RegistryInterface {
    return new utils.Interface(_abi) as ERC6551RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC6551Registry {
    return new Contract(address, _abi, signerOrProvider) as ERC6551Registry;
  }
}
