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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface MockERC6551AccountInterface extends utils.Interface {
  functions: {
    "execute(address,uint256,bytes,uint256)": FunctionFragment;
    "initialize(bool)": FunctionFragment;
    "isValidSigner(address,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "salt()": FunctionFragment;
    "state()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "execute"
      | "initialize"
      | "isValidSigner"
      | "owner"
      | "salt"
      | "state"
      | "supportsInterface"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "isValidSigner",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "salt", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "salt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export interface MockERC6551Account extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockERC6551AccountInterface;

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
    execute(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    initialize(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isValidSigner(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    salt(overrides?: CallOverrides): Promise<[BigNumber]>;

    state(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[BigNumber, string, BigNumber]>;
  };

  execute(
    arg0: string,
    arg1: BigNumberish,
    arg2: BytesLike,
    arg3: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  initialize(
    val: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isValidSigner(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  salt(overrides?: CallOverrides): Promise<BigNumber>;

  state(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<[BigNumber, string, BigNumber]>;

  callStatic: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(val: boolean, overrides?: CallOverrides): Promise<void>;

    isValidSigner(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    salt(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<[BigNumber, string, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    initialize(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isValidSigner(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    salt(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      arg0: string,
      arg1: BigNumberish,
      arg2: BytesLike,
      arg3: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initialize(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isValidSigner(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    salt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
