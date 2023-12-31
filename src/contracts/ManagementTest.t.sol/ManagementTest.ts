/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface ManagementTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "borrowAndStake()": FunctionFragment;
    "cardTBA()": FunctionFragment;
    "connexusCard()": FunctionFragment;
    "deployer()": FunctionFragment;
    "erc6551Registry()": FunctionFragment;
    "erc721Mock()": FunctionFragment;
    "failed()": FunctionFragment;
    "management()": FunctionFragment;
    "nft()": FunctionFragment;
    "realTokenizado()": FunctionFragment;
    "rwaCar()": FunctionFragment;
    "rwaRealstate()": FunctionFragment;
    "setUp()": FunctionFragment;
    "signer()": FunctionFragment;
    "testCreateBankTBACardSuccess()": FunctionFragment;
    "testCreateConnexusCardSuccess()": FunctionFragment;
    "user()": FunctionFragment;
    "utilityConnexus()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "borrowAndStake"
      | "cardTBA"
      | "connexusCard"
      | "deployer"
      | "erc6551Registry"
      | "erc721Mock"
      | "failed"
      | "management"
      | "nft"
      | "realTokenizado"
      | "rwaCar"
      | "rwaRealstate"
      | "setUp"
      | "signer"
      | "testCreateBankTBACardSuccess"
      | "testCreateConnexusCardSuccess"
      | "user"
      | "utilityConnexus"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowAndStake",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cardTBA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "connexusCard",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "erc6551Registry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc721Mock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "management",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "realTokenizado",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rwaCar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rwaRealstate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testCreateBankTBACardSuccess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testCreateConnexusCardSuccess",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "user", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "utilityConnexus",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cardTBA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "connexusCard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "erc6551Registry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "erc721Mock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "management", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "realTokenizado",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rwaCar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rwaRealstate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testCreateBankTBACardSuccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testCreateConnexusCardSuccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "utilityConnexus",
    data: BytesLike
  ): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_array(uint256[])": EventFragment;
    "log_array(int256[])": EventFragment;
    "log_array(address[])": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_array(string,uint256[])": EventFragment;
    "log_named_array(string,int256[])": EventFragment;
    "log_named_array(string,address[])": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,int256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,address[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_array_uint256_array_EventObject {
  val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_uint256_array_EventObject
>;

export type log_array_uint256_array_EventFilter =
  TypedEventFilter<log_array_uint256_array_Event>;

export interface log_array_int256_array_EventObject {
  val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_int256_array_EventObject
>;

export type log_array_int256_array_EventFilter =
  TypedEventFilter<log_array_int256_array_Event>;

export interface log_array_address_array_EventObject {
  val: string[];
}
export type log_array_address_array_Event = TypedEvent<
  [string[]],
  log_array_address_array_EventObject
>;

export type log_array_address_array_EventFilter =
  TypedEventFilter<log_array_address_array_Event>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_array_string_uint256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_uint256_array_EventObject
>;

export type log_named_array_string_uint256_array_EventFilter =
  TypedEventFilter<log_named_array_string_uint256_array_Event>;

export interface log_named_array_string_int256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_int256_array_EventObject
>;

export type log_named_array_string_int256_array_EventFilter =
  TypedEventFilter<log_named_array_string_int256_array_Event>;

export interface log_named_array_string_address_array_EventObject {
  key: string;
  val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<
  [string, string[]],
  log_named_array_string_address_array_EventObject
>;

export type log_named_array_string_address_array_EventFilter =
  TypedEventFilter<log_named_array_string_address_array_Event>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface ManagementTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ManagementTestInterface;

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
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    borrowAndStake(overrides?: CallOverrides): Promise<[string]>;

    cardTBA(overrides?: CallOverrides): Promise<[string]>;

    connexusCard(overrides?: CallOverrides): Promise<[string]>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    erc6551Registry(overrides?: CallOverrides): Promise<[string]>;

    erc721Mock(overrides?: CallOverrides): Promise<[string]>;

    failed(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    management(overrides?: CallOverrides): Promise<[string]>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    realTokenizado(overrides?: CallOverrides): Promise<[string]>;

    rwaCar(overrides?: CallOverrides): Promise<[string]>;

    rwaRealstate(overrides?: CallOverrides): Promise<[string]>;

    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    testCreateBankTBACardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testCreateConnexusCardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    user(overrides?: CallOverrides): Promise<[string]>;

    utilityConnexus(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  borrowAndStake(overrides?: CallOverrides): Promise<string>;

  cardTBA(overrides?: CallOverrides): Promise<string>;

  connexusCard(overrides?: CallOverrides): Promise<string>;

  deployer(overrides?: CallOverrides): Promise<string>;

  erc6551Registry(overrides?: CallOverrides): Promise<string>;

  erc721Mock(overrides?: CallOverrides): Promise<string>;

  failed(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  management(overrides?: CallOverrides): Promise<string>;

  nft(overrides?: CallOverrides): Promise<string>;

  realTokenizado(overrides?: CallOverrides): Promise<string>;

  rwaCar(overrides?: CallOverrides): Promise<string>;

  rwaRealstate(overrides?: CallOverrides): Promise<string>;

  setUp(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testCreateBankTBACardSuccess(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testCreateConnexusCardSuccess(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  user(overrides?: CallOverrides): Promise<string>;

  utilityConnexus(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    borrowAndStake(overrides?: CallOverrides): Promise<string>;

    cardTBA(overrides?: CallOverrides): Promise<string>;

    connexusCard(overrides?: CallOverrides): Promise<string>;

    deployer(overrides?: CallOverrides): Promise<string>;

    erc6551Registry(overrides?: CallOverrides): Promise<string>;

    erc721Mock(overrides?: CallOverrides): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    management(overrides?: CallOverrides): Promise<string>;

    nft(overrides?: CallOverrides): Promise<string>;

    realTokenizado(overrides?: CallOverrides): Promise<string>;

    rwaCar(overrides?: CallOverrides): Promise<string>;

    rwaRealstate(overrides?: CallOverrides): Promise<string>;

    setUp(overrides?: CallOverrides): Promise<void>;

    signer(overrides?: CallOverrides): Promise<string>;

    testCreateBankTBACardSuccess(overrides?: CallOverrides): Promise<void>;

    testCreateConnexusCardSuccess(overrides?: CallOverrides): Promise<void>;

    user(overrides?: CallOverrides): Promise<string>;

    utilityConnexus(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
    "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
    "log_array(address[])"(val?: null): log_array_address_array_EventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_array(string,uint256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_uint256_array_EventFilter;
    "log_named_array(string,int256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_int256_array_EventFilter;
    "log_named_array(string,address[])"(
      key?: null,
      val?: null
    ): log_named_array_string_address_array_EventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAndStake(overrides?: CallOverrides): Promise<BigNumber>;

    cardTBA(overrides?: CallOverrides): Promise<BigNumber>;

    connexusCard(overrides?: CallOverrides): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    erc6551Registry(overrides?: CallOverrides): Promise<BigNumber>;

    erc721Mock(overrides?: CallOverrides): Promise<BigNumber>;

    failed(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    management(overrides?: CallOverrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    realTokenizado(overrides?: CallOverrides): Promise<BigNumber>;

    rwaCar(overrides?: CallOverrides): Promise<BigNumber>;

    rwaRealstate(overrides?: CallOverrides): Promise<BigNumber>;

    setUp(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    testCreateBankTBACardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testCreateConnexusCardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<BigNumber>;

    utilityConnexus(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowAndStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cardTBA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    connexusCard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc6551Registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc721Mock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    management(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realTokenizado(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rwaCar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rwaRealstate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testCreateBankTBACardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testCreateConnexusCardSuccess(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    user(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    utilityConnexus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
