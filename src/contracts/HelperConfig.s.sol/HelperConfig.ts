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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace HelperConfig {
  export type NewtorkConfigStruct = {
    token: string;
    deployerKey: BigNumberish;
  };

  export type NewtorkConfigStructOutput = [string, BigNumber] & {
    token: string;
    deployerKey: BigNumber;
  };
}

export interface HelperConfigInterface extends utils.Interface {
  functions: {
    "DEFAULT_ANVIL_KEY()": FunctionFragment;
    "IS_SCRIPT()": FunctionFragment;
    "activeNetworkConfig()": FunctionFragment;
    "getMainnetConfig()": FunctionFragment;
    "getOrCreateAnvilConfig()": FunctionFragment;
    "getTestnetConfig()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ANVIL_KEY"
      | "IS_SCRIPT"
      | "activeNetworkConfig"
      | "getMainnetConfig"
      | "getOrCreateAnvilConfig"
      | "getTestnetConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ANVIL_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activeNetworkConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMainnetConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateAnvilConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTestnetConfig",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ANVIL_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "activeNetworkConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMainnetConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateAnvilConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTestnetConfig",
    data: BytesLike
  ): Result;

  events: {};
}

export interface HelperConfig extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelperConfigInterface;

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
    DEFAULT_ANVIL_KEY(overrides?: CallOverrides): Promise<[BigNumber]>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    activeNetworkConfig(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; deployerKey: BigNumber }>;

    getMainnetConfig(
      overrides?: CallOverrides
    ): Promise<[HelperConfig.NewtorkConfigStructOutput]>;

    getOrCreateAnvilConfig(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getTestnetConfig(
      overrides?: CallOverrides
    ): Promise<[HelperConfig.NewtorkConfigStructOutput]>;
  };

  DEFAULT_ANVIL_KEY(overrides?: CallOverrides): Promise<BigNumber>;

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  activeNetworkConfig(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { token: string; deployerKey: BigNumber }>;

  getMainnetConfig(
    overrides?: CallOverrides
  ): Promise<HelperConfig.NewtorkConfigStructOutput>;

  getOrCreateAnvilConfig(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getTestnetConfig(
    overrides?: CallOverrides
  ): Promise<HelperConfig.NewtorkConfigStructOutput>;

  callStatic: {
    DEFAULT_ANVIL_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    activeNetworkConfig(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; deployerKey: BigNumber }>;

    getMainnetConfig(
      overrides?: CallOverrides
    ): Promise<HelperConfig.NewtorkConfigStructOutput>;

    getOrCreateAnvilConfig(
      overrides?: CallOverrides
    ): Promise<HelperConfig.NewtorkConfigStructOutput>;

    getTestnetConfig(
      overrides?: CallOverrides
    ): Promise<HelperConfig.NewtorkConfigStructOutput>;
  };

  filters: {};

  estimateGas: {
    DEFAULT_ANVIL_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    activeNetworkConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getMainnetConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getOrCreateAnvilConfig(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getTestnetConfig(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ANVIL_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activeNetworkConfig(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMainnetConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrCreateAnvilConfig(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getTestnetConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
