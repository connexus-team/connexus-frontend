/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC6551Account,
  ERC6551AccountInterface,
} from "../ERC6551Account";

const _abi = [
  {
    inputs: [],
    name: "ERC6551Account__CallerNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC6551Account__InvalidOperation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "operation",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isValidSigner",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "token",
    outputs: [
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107a1806100206000396000f3fe6080604052600436106100695760003560e01c80638da5cb5b116100435780638da5cb5b14610103578063c19d93fb14610130578063fc0c546a1461014e57600080fd5b806301ffc9a714610075578063523e3260146100aa57806374420f4c146100e357600080fd5b3661007057005b600080fd5b34801561008157600080fd5b50610095610090366004610533565b610186565b60405190151581526020015b60405180910390f35b3480156100b657600080fd5b506100ca6100c53660046105be565b6102bf565b6040516001600160e01b031990911681526020016100a1565b6100f66100f1366004610613565b610301565b6040516100a19190610677565b34801561010f57600080fd5b5061011861040c565b6040516001600160a01b0390911681526020016100a1565b34801561013c57600080fd5b506000546040519081526020016100a1565b34801561015a57600080fd5b506101636104bb565b604080519384526001600160a01b039092166020840152908201526060016100a1565b60006001600160e01b031982167f01ffc9a70000000000000000000000000000000000000000000000000000000014806101e957506001600160e01b031982167f36372b0700000000000000000000000000000000000000000000000000000000145b8061021d57506001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000145b8061025157506001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000145b8061028557506001600160e01b031982167f6faff5f100000000000000000000000000000000000000000000000000000000145b806102b957506001600160e01b031982167f74420f4c00000000000000000000000000000000000000000000000000000000145b92915050565b60006102ca8461050e565b156102f657507f1626ba7e000000000000000000000000000000000000000000000000000000006102fa565b5060005b9392505050565b606061030c3361050e565b610342576040517fab5ea04500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b811561037a576040517fda10969200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808154610388906106c5565b91905081905550600080876001600160a01b03168787876040516103ad929190610705565b60006040518083038185875af1925050503d80600081146103ea576040519150601f19603f3d011682016040523d82523d6000602084013e6103ef565b606091505b50915091508161040157805160208201fd5b979650505050505050565b60008060008061041a6104bb565b925092509250468314610431576000935050505090565b6040517f6352211e000000000000000000000000000000000000000000000000000000008152600481018290526001600160a01b03831690636352211e90602401602060405180830381865afa15801561048f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190610715565b935050505090565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c808060200190518101906105029190610732565b93509350935050909192565b600061051861040c565b6001600160a01b0316826001600160a01b0316149050919050565b60006020828403121561054557600080fd5b81356001600160e01b0319811681146102fa57600080fd5b6001600160a01b038116811461057257600080fd5b50565b60008083601f84011261058757600080fd5b50813567ffffffffffffffff81111561059f57600080fd5b6020830191508360208285010111156105b757600080fd5b9250929050565b6000806000604084860312156105d357600080fd5b83356105de8161055d565b9250602084013567ffffffffffffffff8111156105fa57600080fd5b61060686828701610575565b9497909650939450505050565b60008060008060006080868803121561062b57600080fd5b85356106368161055d565b945060208601359350604086013567ffffffffffffffff81111561065957600080fd5b61066588828901610575565b96999598509660600135949350505050565b600060208083528351808285015260005b818110156106a457858101830151858201604001528201610688565b506000604082860101526040601f19601f8301168501019250505092915050565b6000600182016106fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8183823760009101908152919050565b60006020828403121561072757600080fd5b81516102fa8161055d565b60008060006060848603121561074757600080fd5b8351925060208401516107598161055d565b8092505060408401519050925092509256fea2646970667358221220d4a751551ef35cd7410ceb1495018beda9b0618b28b37f7604a03e9dd93dd57e64736f6c63430008130033";

type ERC6551AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC6551AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC6551Account__factory extends ContractFactory {
  constructor(...args: ERC6551AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ERC6551Account> {
    return super.deploy(overrides || {}) as Promise<ERC6551Account>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC6551Account {
    return super.attach(address) as ERC6551Account;
  }
  override connect(signer: Signer): ERC6551Account__factory {
    return super.connect(signer) as ERC6551Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC6551AccountInterface {
    return new utils.Interface(_abi) as ERC6551AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC6551Account {
    return new Contract(address, _abi, signerOrProvider) as ERC6551Account;
  }
}
