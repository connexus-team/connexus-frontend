/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ERC6551RegistryInterface extends utils.Interface {
  functions: {
    "account(address,uint256,address,uint256,uint256)": FunctionFragment;
    "createAccount(address,uint256,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "account" | "createAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "account",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [
      string,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "account", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;

  events: {
    "AccountCreated(address,address,uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
}

export interface AccountCreatedEventObject {
  account: string;
  implementation: string;
  chainId: BigNumber;
  tokenContract: string;
  tokenId: BigNumber;
  salt: BigNumber;
}
export type AccountCreatedEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, BigNumber],
  AccountCreatedEventObject
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface ERC6551Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC6551RegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    account(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createAccount(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      initData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  account(
    implementation: string,
    chainId: BigNumberish,
    tokenContract: string,
    tokenId: BigNumberish,
    salt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  createAccount(
    implementation: string,
    chainId: BigNumberish,
    tokenContract: string,
    tokenId: BigNumberish,
    salt: BigNumberish,
    initData: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    account(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccount(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      initData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "AccountCreated(address,address,uint256,address,uint256,uint256)"(
      account?: null,
      implementation?: string | null,
      chainId?: null,
      tokenContract?: string | null,
      tokenId?: BigNumberish | null,
      salt?: null
    ): AccountCreatedEventFilter;
    AccountCreated(
      account?: null,
      implementation?: string | null,
      chainId?: null,
      tokenContract?: string | null,
      tokenId?: BigNumberish | null,
      salt?: null
    ): AccountCreatedEventFilter;
  };

  estimateGas: {
    account(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccount(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      initData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    account(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      implementation: string,
      chainId: BigNumberish,
      tokenContract: string,
      tokenId: BigNumberish,
      salt: BigNumberish,
      initData: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}