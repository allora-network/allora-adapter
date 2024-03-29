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
} from "./common";

export type NumericDataStruct = {
  topicId: BigNumberish;
  timestamp: BigNumberish;
  extraData: BytesLike;
  numericValues: BigNumberish[];
};

export type NumericDataStructOutput = [
  topicId: bigint,
  timestamp: bigint,
  extraData: string,
  numericValues: bigint[]
] & {
  topicId: bigint;
  timestamp: bigint;
  extraData: string;
  numericValues: bigint[];
};

export type AlloraAdapterNumericDataStruct = {
  signature: BytesLike;
  numericData: NumericDataStruct;
  extraData: BytesLike;
};

export type AlloraAdapterNumericDataStructOutput = [
  signature: string,
  numericData: NumericDataStructOutput,
  extraData: string
] & {
  signature: string;
  numericData: NumericDataStructOutput;
  extraData: string;
};

export interface AlloraAdapterBringPredictionOnChainExampleInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "alloraAdapter"
      | "callProtocolFunctionWithAlloraAdapterPredictionValue"
      | "callProtocolFunctionWithExistingValue"
      | "owner"
      | "pendingOwner"
      | "renounceOwnership"
      | "setAlloraAdapterContract"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferStarted" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "alloraAdapter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callProtocolFunctionWithAlloraAdapterPredictionValue",
    values: [BigNumberish, AlloraAdapterNumericDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "callProtocolFunctionWithExistingValue",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAlloraAdapterContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alloraAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callProtocolFunctionWithAlloraAdapterPredictionValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callProtocolFunctionWithExistingValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAlloraAdapterContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AlloraAdapterBringPredictionOnChainExample
  extends BaseContract {
  connect(
    runner?: ContractRunner | null
  ): AlloraAdapterBringPredictionOnChainExample;
  waitForDeployment(): Promise<this>;

  interface: AlloraAdapterBringPredictionOnChainExampleInterface;

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

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  alloraAdapter: TypedContractMethod<[], [string], "view">;

  callProtocolFunctionWithAlloraAdapterPredictionValue: TypedContractMethod<
    [
      protocolFunctionArgument: BigNumberish,
      alloraAdapterData: AlloraAdapterNumericDataStruct
    ],
    [void],
    "payable"
  >;

  callProtocolFunctionWithExistingValue: TypedContractMethod<
    [protocolFunctionArgument: BigNumberish, topicId: BigNumberish],
    [void],
    "payable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAlloraAdapterContract: TypedContractMethod<
    [alloraAdapter_: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "alloraAdapter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "callProtocolFunctionWithAlloraAdapterPredictionValue"
  ): TypedContractMethod<
    [
      protocolFunctionArgument: BigNumberish,
      alloraAdapterData: AlloraAdapterNumericDataStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "callProtocolFunctionWithExistingValue"
  ): TypedContractMethod<
    [protocolFunctionArgument: BigNumberish, topicId: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAlloraAdapterContract"
  ): TypedContractMethod<[alloraAdapter_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
