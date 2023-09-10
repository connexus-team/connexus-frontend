/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526040516104ee3803806104ee833981016040819052610022916102de565b61002e82826000610035565b50506103fb565b61003e83610061565b60008251118061004b5750805b1561005c5761005a83836100a1565b505b505050565b61006a816100cd565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100c683836040518060600160405280602781526020016104c760279139610180565b9392505050565b6001600160a01b0381163b61013f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080856001600160a01b03168560405161019d91906103ac565b600060405180830381855af49150503d80600081146101d8576040519150601f19603f3d011682016040523d82523d6000602084013e6101dd565b606091505b5090925090506101ef868383876101f9565b9695505050505050565b60608315610268578251600003610261576001600160a01b0385163b6102615760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610136565b5081610272565b610272838361027a565b949350505050565b81511561028a5781518083602001fd5b8060405162461bcd60e51b815260040161013691906103c8565b634e487b7160e01b600052604160045260246000fd5b60005b838110156102d55781810151838201526020016102bd565b50506000910152565b600080604083850312156102f157600080fd5b82516001600160a01b038116811461030857600080fd5b60208401519092506001600160401b038082111561032557600080fd5b818501915085601f83011261033957600080fd5b81518181111561034b5761034b6102a4565b604051601f8201601f19908116603f01168101908382118183101715610373576103736102a4565b8160405282815288602084870101111561038c57600080fd5b61039d8360208301602088016102ba565b80955050505050509250929050565b600082516103be8184602087016102ba565b9190910192915050565b60208152600082518060208401526103e78160408501602087016102ba565b601f01601f19169190910160400192915050565b60be806104096000396000f3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6065565b565b600060607f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156083573d6000f35b3d6000fdfea2646970667358221220371a350cff292565f0cdc42004b752b251d796208860a0482d6f8d6e12c5d52764736f6c63430008130033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type ERC1967ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  override getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}
