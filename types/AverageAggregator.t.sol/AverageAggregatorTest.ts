/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace StdInvariant {
  export type FuzzSelectorStruct = {
    addr: AddressLike;
    selectors: BytesLike[];
  };

  export type FuzzSelectorStructOutput = [addr: string, selectors: string[]] & {
    addr: string;
    selectors: string[];
  };

  export type FuzzInterfaceStruct = { addr: AddressLike; artifacts: string[] };

  export type FuzzInterfaceStructOutput = [
    addr: string,
    artifacts: string[]
  ] & { addr: string; artifacts: string[] };
}

export interface AverageAggregatorTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "IS_TEST"
      | "averageAggregator"
      | "excludeArtifacts"
      | "excludeContracts"
      | "excludeSenders"
      | "failed"
      | "setUp"
      | "targetArtifactSelectors"
      | "targetArtifacts"
      | "targetContracts"
      | "targetInterfaces"
      | "targetSelectors"
      | "targetSenders"
      | "test_averageAggregator"
      | "test_averageAggregatorFuzz"
      | "test_averageAggregatorNoValues"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "log"
      | "log_address"
      | "log_array(uint256[])"
      | "log_array(int256[])"
      | "log_array(address[])"
      | "log_bytes"
      | "log_bytes32"
      | "log_int"
      | "log_named_address"
      | "log_named_array(string,uint256[])"
      | "log_named_array(string,int256[])"
      | "log_named_array(string,address[])"
      | "log_named_bytes"
      | "log_named_bytes32"
      | "log_named_decimal_int"
      | "log_named_decimal_uint"
      | "log_named_int"
      | "log_named_string"
      | "log_named_uint"
      | "log_string"
      | "log_uint"
      | "logs"
  ): EventFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "averageAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeSenders",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "targetArtifactSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetInterfaces",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_averageAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_averageAggregatorFuzz",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "test_averageAggregatorNoValues",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "averageAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifactSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_averageAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_averageAggregatorFuzz",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_averageAggregatorNoValues",
    data: BytesLike
  ): Result;
}

export namespace logEvent {
  export type InputTuple = [arg0: string];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_addressEvent {
  export type InputTuple = [arg0: AddressLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_uint256_array_Event {
  export type InputTuple = [val: BigNumberish[]];
  export type OutputTuple = [val: bigint[]];
  export interface OutputObject {
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_int256_array_Event {
  export type InputTuple = [val: BigNumberish[]];
  export type OutputTuple = [val: bigint[]];
  export interface OutputObject {
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_address_array_Event {
  export type InputTuple = [val: AddressLike[]];
  export type OutputTuple = [val: string[]];
  export interface OutputObject {
    val: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_bytesEvent {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_bytes32Event {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_intEvent {
  export type InputTuple = [arg0: BigNumberish];
  export type OutputTuple = [arg0: bigint];
  export interface OutputObject {
    arg0: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_addressEvent {
  export type InputTuple = [key: string, val: AddressLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_uint256_array_Event {
  export type InputTuple = [key: string, val: BigNumberish[]];
  export type OutputTuple = [key: string, val: bigint[]];
  export interface OutputObject {
    key: string;
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_int256_array_Event {
  export type InputTuple = [key: string, val: BigNumberish[]];
  export type OutputTuple = [key: string, val: bigint[]];
  export interface OutputObject {
    key: string;
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_address_array_Event {
  export type InputTuple = [key: string, val: AddressLike[]];
  export type OutputTuple = [key: string, val: string[]];
  export interface OutputObject {
    key: string;
    val: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_bytesEvent {
  export type InputTuple = [key: string, val: BytesLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_bytes32Event {
  export type InputTuple = [key: string, val: BytesLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_decimal_intEvent {
  export type InputTuple = [
    key: string,
    val: BigNumberish,
    decimals: BigNumberish
  ];
  export type OutputTuple = [key: string, val: bigint, decimals: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
    decimals: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_decimal_uintEvent {
  export type InputTuple = [
    key: string,
    val: BigNumberish,
    decimals: BigNumberish
  ];
  export type OutputTuple = [key: string, val: bigint, decimals: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
    decimals: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_intEvent {
  export type InputTuple = [key: string, val: BigNumberish];
  export type OutputTuple = [key: string, val: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_stringEvent {
  export type InputTuple = [key: string, val: string];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_uintEvent {
  export type InputTuple = [key: string, val: BigNumberish];
  export type OutputTuple = [key: string, val: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_stringEvent {
  export type InputTuple = [arg0: string];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_uintEvent {
  export type InputTuple = [arg0: BigNumberish];
  export type OutputTuple = [arg0: bigint];
  export interface OutputObject {
    arg0: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace logsEvent {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AverageAggregatorTest extends BaseContract {
  connect(runner?: ContractRunner | null): AverageAggregatorTest;
  waitForDeployment(): Promise<this>;

  interface: AverageAggregatorTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  IS_TEST: TypedContractMethod<[], [boolean], "view">;

  averageAggregator: TypedContractMethod<[], [string], "view">;

  excludeArtifacts: TypedContractMethod<[], [string[]], "view">;

  excludeContracts: TypedContractMethod<[], [string[]], "view">;

  excludeSenders: TypedContractMethod<[], [string[]], "view">;

  failed: TypedContractMethod<[], [boolean], "nonpayable">;

  setUp: TypedContractMethod<[], [void], "nonpayable">;

  targetArtifactSelectors: TypedContractMethod<
    [],
    [StdInvariant.FuzzSelectorStructOutput[]],
    "view"
  >;

  targetArtifacts: TypedContractMethod<[], [string[]], "view">;

  targetContracts: TypedContractMethod<[], [string[]], "view">;

  targetInterfaces: TypedContractMethod<
    [],
    [StdInvariant.FuzzInterfaceStructOutput[]],
    "view"
  >;

  targetSelectors: TypedContractMethod<
    [],
    [StdInvariant.FuzzSelectorStructOutput[]],
    "view"
  >;

  targetSenders: TypedContractMethod<[], [string[]], "view">;

  test_averageAggregator: TypedContractMethod<[], [void], "nonpayable">;

  test_averageAggregatorFuzz: TypedContractMethod<
    [a: BigNumberish, b: BigNumberish, c: BigNumberish],
    [void],
    "nonpayable"
  >;

  test_averageAggregatorNoValues: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "IS_TEST"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "averageAggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "excludeArtifacts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "excludeContracts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "excludeSenders"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "failed"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setUp"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "targetArtifactSelectors"
  ): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "targetArtifacts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "targetContracts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "targetInterfaces"
  ): TypedContractMethod<
    [],
    [StdInvariant.FuzzInterfaceStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "targetSelectors"
  ): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "targetSenders"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "test_averageAggregator"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "test_averageAggregatorFuzz"
  ): TypedContractMethod<
    [a: BigNumberish, b: BigNumberish, c: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "test_averageAggregatorNoValues"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "log"
  ): TypedContractEvent<
    logEvent.InputTuple,
    logEvent.OutputTuple,
    logEvent.OutputObject
  >;
  getEvent(
    key: "log_address"
  ): TypedContractEvent<
    log_addressEvent.InputTuple,
    log_addressEvent.OutputTuple,
    log_addressEvent.OutputObject
  >;
  getEvent(
    key: "log_array(uint256[])"
  ): TypedContractEvent<
    log_array_uint256_array_Event.InputTuple,
    log_array_uint256_array_Event.OutputTuple,
    log_array_uint256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_array(int256[])"
  ): TypedContractEvent<
    log_array_int256_array_Event.InputTuple,
    log_array_int256_array_Event.OutputTuple,
    log_array_int256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_array(address[])"
  ): TypedContractEvent<
    log_array_address_array_Event.InputTuple,
    log_array_address_array_Event.OutputTuple,
    log_array_address_array_Event.OutputObject
  >;
  getEvent(
    key: "log_bytes"
  ): TypedContractEvent<
    log_bytesEvent.InputTuple,
    log_bytesEvent.OutputTuple,
    log_bytesEvent.OutputObject
  >;
  getEvent(
    key: "log_bytes32"
  ): TypedContractEvent<
    log_bytes32Event.InputTuple,
    log_bytes32Event.OutputTuple,
    log_bytes32Event.OutputObject
  >;
  getEvent(
    key: "log_int"
  ): TypedContractEvent<
    log_intEvent.InputTuple,
    log_intEvent.OutputTuple,
    log_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_address"
  ): TypedContractEvent<
    log_named_addressEvent.InputTuple,
    log_named_addressEvent.OutputTuple,
    log_named_addressEvent.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,uint256[])"
  ): TypedContractEvent<
    log_named_array_string_uint256_array_Event.InputTuple,
    log_named_array_string_uint256_array_Event.OutputTuple,
    log_named_array_string_uint256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,int256[])"
  ): TypedContractEvent<
    log_named_array_string_int256_array_Event.InputTuple,
    log_named_array_string_int256_array_Event.OutputTuple,
    log_named_array_string_int256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,address[])"
  ): TypedContractEvent<
    log_named_array_string_address_array_Event.InputTuple,
    log_named_array_string_address_array_Event.OutputTuple,
    log_named_array_string_address_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_bytes"
  ): TypedContractEvent<
    log_named_bytesEvent.InputTuple,
    log_named_bytesEvent.OutputTuple,
    log_named_bytesEvent.OutputObject
  >;
  getEvent(
    key: "log_named_bytes32"
  ): TypedContractEvent<
    log_named_bytes32Event.InputTuple,
    log_named_bytes32Event.OutputTuple,
    log_named_bytes32Event.OutputObject
  >;
  getEvent(
    key: "log_named_decimal_int"
  ): TypedContractEvent<
    log_named_decimal_intEvent.InputTuple,
    log_named_decimal_intEvent.OutputTuple,
    log_named_decimal_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_decimal_uint"
  ): TypedContractEvent<
    log_named_decimal_uintEvent.InputTuple,
    log_named_decimal_uintEvent.OutputTuple,
    log_named_decimal_uintEvent.OutputObject
  >;
  getEvent(
    key: "log_named_int"
  ): TypedContractEvent<
    log_named_intEvent.InputTuple,
    log_named_intEvent.OutputTuple,
    log_named_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_string"
  ): TypedContractEvent<
    log_named_stringEvent.InputTuple,
    log_named_stringEvent.OutputTuple,
    log_named_stringEvent.OutputObject
  >;
  getEvent(
    key: "log_named_uint"
  ): TypedContractEvent<
    log_named_uintEvent.InputTuple,
    log_named_uintEvent.OutputTuple,
    log_named_uintEvent.OutputObject
  >;
  getEvent(
    key: "log_string"
  ): TypedContractEvent<
    log_stringEvent.InputTuple,
    log_stringEvent.OutputTuple,
    log_stringEvent.OutputObject
  >;
  getEvent(
    key: "log_uint"
  ): TypedContractEvent<
    log_uintEvent.InputTuple,
    log_uintEvent.OutputTuple,
    log_uintEvent.OutputObject
  >;
  getEvent(
    key: "logs"
  ): TypedContractEvent<
    logsEvent.InputTuple,
    logsEvent.OutputTuple,
    logsEvent.OutputObject
  >;

  filters: {
    "log(string)": TypedContractEvent<
      logEvent.InputTuple,
      logEvent.OutputTuple,
      logEvent.OutputObject
    >;
    log: TypedContractEvent<
      logEvent.InputTuple,
      logEvent.OutputTuple,
      logEvent.OutputObject
    >;

    "log_address(address)": TypedContractEvent<
      log_addressEvent.InputTuple,
      log_addressEvent.OutputTuple,
      log_addressEvent.OutputObject
    >;
    log_address: TypedContractEvent<
      log_addressEvent.InputTuple,
      log_addressEvent.OutputTuple,
      log_addressEvent.OutputObject
    >;

    "log_array(uint256[])": TypedContractEvent<
      log_array_uint256_array_Event.InputTuple,
      log_array_uint256_array_Event.OutputTuple,
      log_array_uint256_array_Event.OutputObject
    >;
    "log_array(int256[])": TypedContractEvent<
      log_array_int256_array_Event.InputTuple,
      log_array_int256_array_Event.OutputTuple,
      log_array_int256_array_Event.OutputObject
    >;
    "log_array(address[])": TypedContractEvent<
      log_array_address_array_Event.InputTuple,
      log_array_address_array_Event.OutputTuple,
      log_array_address_array_Event.OutputObject
    >;

    "log_bytes(bytes)": TypedContractEvent<
      log_bytesEvent.InputTuple,
      log_bytesEvent.OutputTuple,
      log_bytesEvent.OutputObject
    >;
    log_bytes: TypedContractEvent<
      log_bytesEvent.InputTuple,
      log_bytesEvent.OutputTuple,
      log_bytesEvent.OutputObject
    >;

    "log_bytes32(bytes32)": TypedContractEvent<
      log_bytes32Event.InputTuple,
      log_bytes32Event.OutputTuple,
      log_bytes32Event.OutputObject
    >;
    log_bytes32: TypedContractEvent<
      log_bytes32Event.InputTuple,
      log_bytes32Event.OutputTuple,
      log_bytes32Event.OutputObject
    >;

    "log_int(int256)": TypedContractEvent<
      log_intEvent.InputTuple,
      log_intEvent.OutputTuple,
      log_intEvent.OutputObject
    >;
    log_int: TypedContractEvent<
      log_intEvent.InputTuple,
      log_intEvent.OutputTuple,
      log_intEvent.OutputObject
    >;

    "log_named_address(string,address)": TypedContractEvent<
      log_named_addressEvent.InputTuple,
      log_named_addressEvent.OutputTuple,
      log_named_addressEvent.OutputObject
    >;
    log_named_address: TypedContractEvent<
      log_named_addressEvent.InputTuple,
      log_named_addressEvent.OutputTuple,
      log_named_addressEvent.OutputObject
    >;

    "log_named_array(string,uint256[])": TypedContractEvent<
      log_named_array_string_uint256_array_Event.InputTuple,
      log_named_array_string_uint256_array_Event.OutputTuple,
      log_named_array_string_uint256_array_Event.OutputObject
    >;
    "log_named_array(string,int256[])": TypedContractEvent<
      log_named_array_string_int256_array_Event.InputTuple,
      log_named_array_string_int256_array_Event.OutputTuple,
      log_named_array_string_int256_array_Event.OutputObject
    >;
    "log_named_array(string,address[])": TypedContractEvent<
      log_named_array_string_address_array_Event.InputTuple,
      log_named_array_string_address_array_Event.OutputTuple,
      log_named_array_string_address_array_Event.OutputObject
    >;

    "log_named_bytes(string,bytes)": TypedContractEvent<
      log_named_bytesEvent.InputTuple,
      log_named_bytesEvent.OutputTuple,
      log_named_bytesEvent.OutputObject
    >;
    log_named_bytes: TypedContractEvent<
      log_named_bytesEvent.InputTuple,
      log_named_bytesEvent.OutputTuple,
      log_named_bytesEvent.OutputObject
    >;

    "log_named_bytes32(string,bytes32)": TypedContractEvent<
      log_named_bytes32Event.InputTuple,
      log_named_bytes32Event.OutputTuple,
      log_named_bytes32Event.OutputObject
    >;
    log_named_bytes32: TypedContractEvent<
      log_named_bytes32Event.InputTuple,
      log_named_bytes32Event.OutputTuple,
      log_named_bytes32Event.OutputObject
    >;

    "log_named_decimal_int(string,int256,uint256)": TypedContractEvent<
      log_named_decimal_intEvent.InputTuple,
      log_named_decimal_intEvent.OutputTuple,
      log_named_decimal_intEvent.OutputObject
    >;
    log_named_decimal_int: TypedContractEvent<
      log_named_decimal_intEvent.InputTuple,
      log_named_decimal_intEvent.OutputTuple,
      log_named_decimal_intEvent.OutputObject
    >;

    "log_named_decimal_uint(string,uint256,uint256)": TypedContractEvent<
      log_named_decimal_uintEvent.InputTuple,
      log_named_decimal_uintEvent.OutputTuple,
      log_named_decimal_uintEvent.OutputObject
    >;
    log_named_decimal_uint: TypedContractEvent<
      log_named_decimal_uintEvent.InputTuple,
      log_named_decimal_uintEvent.OutputTuple,
      log_named_decimal_uintEvent.OutputObject
    >;

    "log_named_int(string,int256)": TypedContractEvent<
      log_named_intEvent.InputTuple,
      log_named_intEvent.OutputTuple,
      log_named_intEvent.OutputObject
    >;
    log_named_int: TypedContractEvent<
      log_named_intEvent.InputTuple,
      log_named_intEvent.OutputTuple,
      log_named_intEvent.OutputObject
    >;

    "log_named_string(string,string)": TypedContractEvent<
      log_named_stringEvent.InputTuple,
      log_named_stringEvent.OutputTuple,
      log_named_stringEvent.OutputObject
    >;
    log_named_string: TypedContractEvent<
      log_named_stringEvent.InputTuple,
      log_named_stringEvent.OutputTuple,
      log_named_stringEvent.OutputObject
    >;

    "log_named_uint(string,uint256)": TypedContractEvent<
      log_named_uintEvent.InputTuple,
      log_named_uintEvent.OutputTuple,
      log_named_uintEvent.OutputObject
    >;
    log_named_uint: TypedContractEvent<
      log_named_uintEvent.InputTuple,
      log_named_uintEvent.OutputTuple,
      log_named_uintEvent.OutputObject
    >;

    "log_string(string)": TypedContractEvent<
      log_stringEvent.InputTuple,
      log_stringEvent.OutputTuple,
      log_stringEvent.OutputObject
    >;
    log_string: TypedContractEvent<
      log_stringEvent.InputTuple,
      log_stringEvent.OutputTuple,
      log_stringEvent.OutputObject
    >;

    "log_uint(uint256)": TypedContractEvent<
      log_uintEvent.InputTuple,
      log_uintEvent.OutputTuple,
      log_uintEvent.OutputObject
    >;
    log_uint: TypedContractEvent<
      log_uintEvent.InputTuple,
      log_uintEvent.OutputTuple,
      log_uintEvent.OutputObject
    >;

    "logs(bytes)": TypedContractEvent<
      logsEvent.InputTuple,
      logsEvent.OutputTuple,
      logsEvent.OutputObject
    >;
    logs: TypedContractEvent<
      logsEvent.InputTuple,
      logsEvent.OutputTuple,
      logsEvent.OutputObject
    >;
  };
}
