/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RealDigital, RealDigitalInterface } from "../RealDigital";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FrozenBalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
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
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseFrozenBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "frozenBalanceOf",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseFrozenBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "moveAndBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200168e3803806200168e833981016040819052620000349162000192565b818160036200004483826200028b565b5060046200005382826200028b565b50506005805460ff19169055506200006b3362000073565b505062000357565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000f557600080fd5b81516001600160401b0380821115620001125762000112620000cd565b604051601f8301601f19908116603f011681019082821181831017156200013d576200013d620000cd565b816040528381526020925086838588010111156200015a57600080fd5b600091505b838210156200017e57858201830151818301840152908201906200015f565b600093810190920192909252949350505050565b60008060408385031215620001a657600080fd5b82516001600160401b0380821115620001be57600080fd5b620001cc86838701620000e3565b93506020850151915080821115620001e357600080fd5b50620001f285828601620000e3565b9150509250929050565b600181811c908216806200021157607f821691505b6020821081036200023257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200028657600081815260208120601f850160051c81016020861015620002615750805b601f850160051c820191505b8181101562000282578281556001016200026d565b5050505b505050565b81516001600160401b03811115620002a757620002a7620000cd565b620002bf81620002b88454620001fc565b8462000238565b602080601f831160018114620002f75760008415620002de5750858301515b600019600386901b1c1916600185901b17855562000282565b600085815260208120601f198616915b82811015620003285788860151825594840194600190910190840162000307565b5085821015620003475787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61132780620003676000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806370a08231116100ee578063a457c2d711610097578063bb35783b11610071578063bb35783b14610347578063be91de531461035a578063dd62ed3e1461037a578063f2fde38b146103b357600080fd5b8063a457c2d71461030e578063a9059cbb14610321578063b4a4ed391461033457600080fd5b80638456cb59116100c85780638456cb59146102d55780638da5cb5b146102dd57806395d89b411461030657600080fd5b806370a0823114610291578063715018a6146102ba57806379cc6790146102c257600080fd5b8063313ce5671161015057806340c10f191161012a57806340c10f191461026057806342966c68146102735780635c975abb1461028657600080fd5b8063313ce5671461023657806339509351146102455780633f4ba83a1461025857600080fd5b80631a3f5152116101815780631a3f5152146101fb57806323b872dd146102105780632b218c6a1461022357600080fd5b806306fdde03146101a8578063095ea7b3146101c657806318160ddd146101e9575b600080fd5b6101b06103c6565b6040516101bd9190611144565b60405180910390f35b6101d96101d43660046111ae565b610458565b60405190151581526020016101bd565b6002545b6040519081526020016101bd565b61020e6102093660046111ae565b610472565b005b6101d961021e3660046111d8565b610490565b61020e6102313660046111ae565b6104ad565b604051600281526020016101bd565b6101d96102533660046111ae565b61053b565b61020e61057a565b61020e61026e3660046111ae565b61058c565b61020e610281366004611214565b6105a6565b60055460ff166101d9565b6101ed61029f36600461122d565b6001600160a01b031660009081526020819052604090205490565b61020e6105c2565b61020e6102d03660046111ae565b6105d4565b61020e6105ee565b60055461010090046001600160a01b03166040516001600160a01b0390911681526020016101bd565b6101b06105fe565b6101d961031c3660046111ae565b61060d565b6101d961032f3660046111ae565b6106c7565b61020e6103423660046111ae565b6106e2565b61020e6103553660046111d8565b610793565b6101ed61036836600461122d565b60066020526000908152604090205481565b6101ed610388366004611248565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61020e6103c136600461122d565b6107b3565b6060600380546103d59061127b565b80601f01602080910402602001604051908101604052809291908181526020018280546104019061127b565b801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b5050505050905090565b600033610466818585610840565b60019150505b92915050565b61047a610998565b6104826109eb565b61048c8282610a4b565b5050565b600061049a610998565b6104a5848484610bc0565b949350505050565b6104b5610998565b6104bd6109eb565b6001600160a01b038216600090815260066020526040812080548392906104e59084906112cb565b90915550506001600160a01b0382166000818152600660209081526040918290205491519182527fd2dc74064ce9979876047afc7922931592038bce8a7fbaf28417799c138e4e4d910160405180910390a25050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061046690829086906105759087906112cb565b610840565b6105826109eb565b61058a610bd9565b565b610594610998565b61059c6109eb565b61048c8282610c2b565b6105ae610998565b6105b66109eb565b6105bf81610cf6565b50565b6105ca6109eb565b61058a6000610d00565b6105dc610998565b6105e46109eb565b61048c8282610d71565b6105f66109eb565b61058a610d7c565b6060600480546103d59061127b565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106af5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106bc8286868403610840565b506001949350505050565b60006106d1610998565b6106db8383610db9565b9392505050565b6106ea610998565b6106f26109eb565b6001600160a01b03821660009081526006602052604090205481111561076b5760405162461bcd60e51b815260206004820152602860248201527f5265616c4469676974616c3a20496e73756666696369656e742066726f7a656e6044820152672062616c616e636560c01b60648201526084016106a6565b6001600160a01b038216600090815260066020526040812080548392906104e59084906112de565b61079b610998565b6107a36109eb565b6107ae838383610dc3565b505050565b6107bb6109eb565b6001600160a01b0381166108375760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106a6565b6105bf81610d00565b6001600160a01b0383166108bb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106a6565b6001600160a01b0382166109375760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106a6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60055460ff161561058a5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106a6565b6005546001600160a01b0361010090910416331461058a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106a6565b6001600160a01b038216610ac75760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106a6565b610ad382600083610fbd565b6001600160a01b03821660009081526020819052604090205481811015610b625760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106a6565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600033610bce858285611066565b6106bc858585610dc3565b610be16110f2565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610c815760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106a6565b610c8d60008383610fbd565b8060026000828254610c9f91906112cb565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6105bf3382610a4b565b600580546001600160a01b038381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff85161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610482823383611066565b610d84610998565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c0e3390565b6000336104668185855b6001600160a01b038316610e3f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106a6565b6001600160a01b038216610ebb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106a6565b610ec6838383610fbd565b6001600160a01b03831660009081526020819052604090205481811015610f555760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106a6565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35b50505050565b82816001600160a01b038216158061100257506001600160a01b03821660009081526006602090815260408083205491839052909120548291610fff916112de565b10155b61105f5760405162461bcd60e51b815260206004820152602860248201527f5265616c4469676974616c3a20496e73756666696369656e74206c69717569646044820152672062616c616e636560c01b60648201526084016106a6565b5050505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610fb757818110156110e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106a6565b610fb78484848403610840565b60055460ff1661058a5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106a6565b600060208083528351808285015260005b8181101561117157858101830151858201604001528201611155565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146111a957600080fd5b919050565b600080604083850312156111c157600080fd5b6111ca83611192565b946020939093013593505050565b6000806000606084860312156111ed57600080fd5b6111f684611192565b925061120460208501611192565b9150604084013590509250925092565b60006020828403121561122657600080fd5b5035919050565b60006020828403121561123f57600080fd5b6106db82611192565b6000806040838503121561125b57600080fd5b61126483611192565b915061127260208401611192565b90509250929050565b600181811c9082168061128f57607f821691505b6020821081036112af57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561046c5761046c6112b5565b8181038181111561046c5761046c6112b556fea264697066735822122063c067ebac95c1950cde5a5038562bf492cc23efd6d245709660dab7ed74ab6964736f6c63430008130033";

type RealDigitalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RealDigitalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RealDigital__factory extends ContractFactory {
  constructor(...args: RealDigitalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<RealDigital> {
    return super.deploy(
      _name,
      _symbol,
      overrides || {}
    ) as Promise<RealDigital>;
  }
  override getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): RealDigital {
    return super.attach(address) as RealDigital;
  }
  override connect(signer: Signer): RealDigital__factory {
    return super.connect(signer) as RealDigital__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RealDigitalInterface {
    return new utils.Interface(_abi) as RealDigitalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RealDigital {
    return new Contract(address, _abi, signerOrProvider) as RealDigital;
  }
}