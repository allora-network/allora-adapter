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

export type NetworkInferenceDataStruct = {
  networkInference: BigNumberish;
  confidenceIntervalPercentiles: BigNumberish[];
  confidenceIntervalValues: BigNumberish[];
  timestamp: BigNumberish;
  topicId: BigNumberish;
  extraData: BytesLike;
};

export type NetworkInferenceDataStructOutput = [
  networkInference: bigint,
  confidenceIntervalPercentiles: bigint[],
  confidenceIntervalValues: bigint[],
  timestamp: bigint,
  topicId: bigint,
  extraData: string
] & {
  networkInference: bigint;
  confidenceIntervalPercentiles: bigint[];
  confidenceIntervalValues: bigint[];
  timestamp: bigint;
  topicId: bigint;
  extraData: string;
};

export type AlloraConsumerNetworkInferenceDataStruct = {
  signature: BytesLike;
  networkInference: NetworkInferenceDataStruct;
  extraData: BytesLike;
};

export type AlloraConsumerNetworkInferenceDataStructOutput = [
  signature: string,
  networkInference: NetworkInferenceDataStructOutput,
  extraData: string
] & {
  signature: string;
  networkInference: NetworkInferenceDataStructOutput;
  extraData: string;
};

export interface AlloraConsumerBringPredictionOnChainExampleInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "alloraConsumer"
      | "callProtocolFunctionWithAlloraConsumerPredictionValue"
      | "callProtocolFunctionWithExistingValue"
      | "owner"
      | "pendingOwner"
      | "renounceOwnership"
      | "setAlloraConsumerContract"
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
    functionFragment: "alloraConsumer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callProtocolFunctionWithAlloraConsumerPredictionValue",
    values: [BigNumberish, AlloraConsumerNetworkInferenceDataStruct]
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
    functionFragment: "setAlloraConsumerContract",
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
    functionFragment: "alloraConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callProtocolFunctionWithAlloraConsumerPredictionValue",
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
    functionFragment: "setAlloraConsumerContract",
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

export interface AlloraConsumerBringPredictionOnChainExample
  extends BaseContract {
  connect(
    runner?: ContractRunner | null
  ): AlloraConsumerBringPredictionOnChainExample;
  waitForDeployment(): Promise<this>;

  interface: AlloraConsumerBringPredictionOnChainExampleInterface;

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

  alloraConsumer: TypedContractMethod<[], [string], "view">;

  callProtocolFunctionWithAlloraConsumerPredictionValue: TypedContractMethod<
    [
      protocolFunctionArgument: BigNumberish,
      alloraNetworkInferenceData: AlloraConsumerNetworkInferenceDataStruct
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

  setAlloraConsumerContract: TypedContractMethod<
    [alloraConsumer_: AddressLike],
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
    nameOrSignature: "alloraConsumer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "callProtocolFunctionWithAlloraConsumerPredictionValue"
  ): TypedContractMethod<
    [
      protocolFunctionArgument: BigNumberish,
      alloraNetworkInferenceData: AlloraConsumerNetworkInferenceDataStruct
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
    nameOrSignature: "setAlloraConsumerContract"
  ): TypedContractMethod<[alloraConsumer_: AddressLike], [void], "nonpayable">;
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
