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

export type AlloraConsumerConstructorArgsStruct = { owner: AddressLike };

export type AlloraConsumerConstructorArgsStructOutput = [owner: string] & {
  owner: string;
};

export type NetworkInferenceDataStruct = {
  networkInference: BigNumberish;
  timestamp: BigNumberish;
  topicId: BigNumberish;
  confidenceIntervalLowerBound: BigNumberish;
  confidenceIntervalUpperBound: BigNumberish;
  extraData: BytesLike;
};

export type NetworkInferenceDataStructOutput = [
  networkInference: bigint,
  timestamp: bigint,
  topicId: bigint,
  confidenceIntervalLowerBound: bigint,
  confidenceIntervalUpperBound: bigint,
  extraData: string
] & {
  networkInference: bigint;
  timestamp: bigint;
  topicId: bigint;
  confidenceIntervalLowerBound: bigint;
  confidenceIntervalUpperBound: bigint;
  extraData: string;
};

export type TopicValueStruct = {
  recentValue: BigNumberish;
  recentValueTime: BigNumberish;
  recentConfidenceIntervalLowerBound: BigNumberish;
  recentConfidenceIntervalUpperBound: BigNumberish;
};

export type TopicValueStructOutput = [
  recentValue: bigint,
  recentValueTime: bigint,
  recentConfidenceIntervalLowerBound: bigint,
  recentConfidenceIntervalUpperBound: bigint
] & {
  recentValue: bigint;
  recentValueTime: bigint;
  recentConfidenceIntervalLowerBound: bigint;
  recentConfidenceIntervalUpperBound: bigint;
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

export interface AlloraConsumerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "NUMERIC_DATA_TYPEHASH"
      | "acceptOwnership"
      | "addDataProvider"
      | "eip712Domain"
      | "futureDataValiditySeconds"
      | "getNetworkInferenceMessage"
      | "getTopicValue"
      | "owner"
      | "pastDataValiditySeconds"
      | "pendingOwner"
      | "removeDataProvider"
      | "renounceOwnership"
      | "switchedOn"
      | "topicValue"
      | "transferOwnership"
      | "turnOffConsumer"
      | "turnOnConsumer"
      | "updateFutureDataValiditySeconds"
      | "updatePastDataValiditySeconds"
      | "validDataProvider"
      | "verifyNetworkInference"
      | "verifyNetworkInferenceViewOnly"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AlloraConsumerAdminTurnedOff"
      | "AlloraConsumerAdminTurnedOn"
      | "AlloraConsumerOwnerAddedDataProvider"
      | "AlloraConsumerOwnerRemovedDataProvider"
      | "AlloraConsumerOwnerUpdatedFutureDataValiditySeconds"
      | "AlloraConsumerOwnerUpdatedPastDataValiditySeconds"
      | "AlloraConsumerVerifiedData"
      | "AlloraConsumerVerifiedNetworkInferenceData"
      | "AlloraConsumerVerifiedNetworkInferenceDataAndInterval"
      | "EIP712DomainChanged"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "NUMERIC_DATA_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addDataProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "futureDataValiditySeconds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNetworkInferenceMessage",
    values: [NetworkInferenceDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getTopicValue",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pastDataValiditySeconds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeDataProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "switchedOn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "topicValue",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "turnOffConsumer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "turnOnConsumer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateFutureDataValiditySeconds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePastDataValiditySeconds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validDataProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyNetworkInference",
    values: [AlloraConsumerNetworkInferenceDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyNetworkInferenceViewOnly",
    values: [AlloraConsumerNetworkInferenceDataStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "NUMERIC_DATA_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "futureDataValiditySeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNetworkInferenceMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTopicValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pastDataValiditySeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "switchedOn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "topicValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "turnOffConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "turnOnConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFutureDataValiditySeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePastDataValiditySeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyNetworkInference",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyNetworkInferenceViewOnly",
    data: BytesLike
  ): Result;
}

export namespace AlloraConsumerAdminTurnedOffEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerAdminTurnedOnEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerOwnerAddedDataProviderEvent {
  export type InputTuple = [dataProvider: AddressLike];
  export type OutputTuple = [dataProvider: string];
  export interface OutputObject {
    dataProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerOwnerRemovedDataProviderEvent {
  export type InputTuple = [dataProvider: AddressLike];
  export type OutputTuple = [dataProvider: string];
  export interface OutputObject {
    dataProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent {
  export type InputTuple = [futureDataValiditySeconds: BigNumberish];
  export type OutputTuple = [futureDataValiditySeconds: bigint];
  export interface OutputObject {
    futureDataValiditySeconds: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent {
  export type InputTuple = [pastDataValiditySeconds: BigNumberish];
  export type OutputTuple = [pastDataValiditySeconds: bigint];
  export interface OutputObject {
    pastDataValiditySeconds: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerVerifiedDataEvent {
  export type InputTuple = [
    topicId: BigNumberish,
    numericData: BigNumberish,
    dataProvider: AddressLike,
    extraData: BytesLike
  ];
  export type OutputTuple = [
    topicId: bigint,
    numericData: bigint,
    dataProvider: string,
    extraData: string
  ];
  export interface OutputObject {
    topicId: bigint;
    numericData: bigint;
    dataProvider: string;
    extraData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerVerifiedNetworkInferenceDataEvent {
  export type InputTuple = [
    networkInference: BigNumberish,
    timestamp: BigNumberish,
    topicId: BigNumberish,
    extraData: BytesLike
  ];
  export type OutputTuple = [
    networkInference: bigint,
    timestamp: bigint,
    topicId: bigint,
    extraData: string
  ];
  export interface OutputObject {
    networkInference: bigint;
    timestamp: bigint;
    topicId: bigint;
    extraData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent {
  export type InputTuple = [
    networkInference: BigNumberish,
    timestamp: BigNumberish,
    topicId: BigNumberish,
    confidenceIntervalLowerBound: BigNumberish,
    confidenceIntervalUpperBound: BigNumberish,
    extraData: BytesLike
  ];
  export type OutputTuple = [
    networkInference: bigint,
    timestamp: bigint,
    topicId: bigint,
    confidenceIntervalLowerBound: bigint,
    confidenceIntervalUpperBound: bigint,
    extraData: string
  ];
  export interface OutputObject {
    networkInference: bigint;
    timestamp: bigint;
    topicId: bigint;
    confidenceIntervalLowerBound: bigint;
    confidenceIntervalUpperBound: bigint;
    extraData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export interface AlloraConsumer extends BaseContract {
  connect(runner?: ContractRunner | null): AlloraConsumer;
  waitForDeployment(): Promise<this>;

  interface: AlloraConsumerInterface;

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

  NUMERIC_DATA_TYPEHASH: TypedContractMethod<[], [string], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  addDataProvider: TypedContractMethod<
    [dataProvider: AddressLike],
    [void],
    "nonpayable"
  >;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  futureDataValiditySeconds: TypedContractMethod<[], [bigint], "view">;

  getNetworkInferenceMessage: TypedContractMethod<
    [networkInferenceData: NetworkInferenceDataStruct],
    [string],
    "view"
  >;

  getTopicValue: TypedContractMethod<
    [topicId: BigNumberish, extraData: BytesLike],
    [TopicValueStructOutput],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pastDataValiditySeconds: TypedContractMethod<[], [bigint], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  removeDataProvider: TypedContractMethod<
    [dataProvider: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  switchedOn: TypedContractMethod<[], [boolean], "view">;

  topicValue: TypedContractMethod<
    [topicId: BigNumberish, extraData: BytesLike],
    [
      [bigint, bigint, bigint, bigint] & {
        recentValue: bigint;
        recentValueTime: bigint;
        recentConfidenceIntervalLowerBound: bigint;
        recentConfidenceIntervalUpperBound: bigint;
      }
    ],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  turnOffConsumer: TypedContractMethod<[], [void], "nonpayable">;

  turnOnConsumer: TypedContractMethod<[], [void], "nonpayable">;

  updateFutureDataValiditySeconds: TypedContractMethod<
    [_futureDataValiditySeconds: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePastDataValiditySeconds: TypedContractMethod<
    [_pastDataValiditySeconds: BigNumberish],
    [void],
    "nonpayable"
  >;

  validDataProvider: TypedContractMethod<
    [dataProvider: AddressLike],
    [boolean],
    "view"
  >;

  verifyNetworkInference: TypedContractMethod<
    [nd: AlloraConsumerNetworkInferenceDataStruct],
    [
      [bigint, bigint, bigint, string] & {
        networkInference: bigint;
        confidenceIntervalLowerBound: bigint;
        confidenceIntervalUpperBound: bigint;
        dataProvider: string;
      }
    ],
    "nonpayable"
  >;

  verifyNetworkInferenceViewOnly: TypedContractMethod<
    [nd: AlloraConsumerNetworkInferenceDataStruct],
    [
      [bigint, bigint, bigint, string] & {
        networkInference: bigint;
        confidenceIntervalLowerBound: bigint;
        confidenceIntervalUpperBound: bigint;
        dataProvider: string;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "NUMERIC_DATA_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addDataProvider"
  ): TypedContractMethod<[dataProvider: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "futureDataValiditySeconds"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getNetworkInferenceMessage"
  ): TypedContractMethod<
    [networkInferenceData: NetworkInferenceDataStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTopicValue"
  ): TypedContractMethod<
    [topicId: BigNumberish, extraData: BytesLike],
    [TopicValueStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pastDataValiditySeconds"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeDataProvider"
  ): TypedContractMethod<[dataProvider: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "switchedOn"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "topicValue"
  ): TypedContractMethod<
    [topicId: BigNumberish, extraData: BytesLike],
    [
      [bigint, bigint, bigint, bigint] & {
        recentValue: bigint;
        recentValueTime: bigint;
        recentConfidenceIntervalLowerBound: bigint;
        recentConfidenceIntervalUpperBound: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "turnOffConsumer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "turnOnConsumer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateFutureDataValiditySeconds"
  ): TypedContractMethod<
    [_futureDataValiditySeconds: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePastDataValiditySeconds"
  ): TypedContractMethod<
    [_pastDataValiditySeconds: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "validDataProvider"
  ): TypedContractMethod<[dataProvider: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "verifyNetworkInference"
  ): TypedContractMethod<
    [nd: AlloraConsumerNetworkInferenceDataStruct],
    [
      [bigint, bigint, bigint, string] & {
        networkInference: bigint;
        confidenceIntervalLowerBound: bigint;
        confidenceIntervalUpperBound: bigint;
        dataProvider: string;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifyNetworkInferenceViewOnly"
  ): TypedContractMethod<
    [nd: AlloraConsumerNetworkInferenceDataStruct],
    [
      [bigint, bigint, bigint, string] & {
        networkInference: bigint;
        confidenceIntervalLowerBound: bigint;
        confidenceIntervalUpperBound: bigint;
        dataProvider: string;
      }
    ],
    "view"
  >;

  getEvent(
    key: "AlloraConsumerAdminTurnedOff"
  ): TypedContractEvent<
    AlloraConsumerAdminTurnedOffEvent.InputTuple,
    AlloraConsumerAdminTurnedOffEvent.OutputTuple,
    AlloraConsumerAdminTurnedOffEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerAdminTurnedOn"
  ): TypedContractEvent<
    AlloraConsumerAdminTurnedOnEvent.InputTuple,
    AlloraConsumerAdminTurnedOnEvent.OutputTuple,
    AlloraConsumerAdminTurnedOnEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerOwnerAddedDataProvider"
  ): TypedContractEvent<
    AlloraConsumerOwnerAddedDataProviderEvent.InputTuple,
    AlloraConsumerOwnerAddedDataProviderEvent.OutputTuple,
    AlloraConsumerOwnerAddedDataProviderEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerOwnerRemovedDataProvider"
  ): TypedContractEvent<
    AlloraConsumerOwnerRemovedDataProviderEvent.InputTuple,
    AlloraConsumerOwnerRemovedDataProviderEvent.OutputTuple,
    AlloraConsumerOwnerRemovedDataProviderEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerOwnerUpdatedFutureDataValiditySeconds"
  ): TypedContractEvent<
    AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.InputTuple,
    AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputTuple,
    AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerOwnerUpdatedPastDataValiditySeconds"
  ): TypedContractEvent<
    AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.InputTuple,
    AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputTuple,
    AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerVerifiedData"
  ): TypedContractEvent<
    AlloraConsumerVerifiedDataEvent.InputTuple,
    AlloraConsumerVerifiedDataEvent.OutputTuple,
    AlloraConsumerVerifiedDataEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerVerifiedNetworkInferenceData"
  ): TypedContractEvent<
    AlloraConsumerVerifiedNetworkInferenceDataEvent.InputTuple,
    AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputTuple,
    AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputObject
  >;
  getEvent(
    key: "AlloraConsumerVerifiedNetworkInferenceDataAndInterval"
  ): TypedContractEvent<
    AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.InputTuple,
    AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputTuple,
    AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;
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
    "AlloraConsumerAdminTurnedOff()": TypedContractEvent<
      AlloraConsumerAdminTurnedOffEvent.InputTuple,
      AlloraConsumerAdminTurnedOffEvent.OutputTuple,
      AlloraConsumerAdminTurnedOffEvent.OutputObject
    >;
    AlloraConsumerAdminTurnedOff: TypedContractEvent<
      AlloraConsumerAdminTurnedOffEvent.InputTuple,
      AlloraConsumerAdminTurnedOffEvent.OutputTuple,
      AlloraConsumerAdminTurnedOffEvent.OutputObject
    >;

    "AlloraConsumerAdminTurnedOn()": TypedContractEvent<
      AlloraConsumerAdminTurnedOnEvent.InputTuple,
      AlloraConsumerAdminTurnedOnEvent.OutputTuple,
      AlloraConsumerAdminTurnedOnEvent.OutputObject
    >;
    AlloraConsumerAdminTurnedOn: TypedContractEvent<
      AlloraConsumerAdminTurnedOnEvent.InputTuple,
      AlloraConsumerAdminTurnedOnEvent.OutputTuple,
      AlloraConsumerAdminTurnedOnEvent.OutputObject
    >;

    "AlloraConsumerOwnerAddedDataProvider(address)": TypedContractEvent<
      AlloraConsumerOwnerAddedDataProviderEvent.InputTuple,
      AlloraConsumerOwnerAddedDataProviderEvent.OutputTuple,
      AlloraConsumerOwnerAddedDataProviderEvent.OutputObject
    >;
    AlloraConsumerOwnerAddedDataProvider: TypedContractEvent<
      AlloraConsumerOwnerAddedDataProviderEvent.InputTuple,
      AlloraConsumerOwnerAddedDataProviderEvent.OutputTuple,
      AlloraConsumerOwnerAddedDataProviderEvent.OutputObject
    >;

    "AlloraConsumerOwnerRemovedDataProvider(address)": TypedContractEvent<
      AlloraConsumerOwnerRemovedDataProviderEvent.InputTuple,
      AlloraConsumerOwnerRemovedDataProviderEvent.OutputTuple,
      AlloraConsumerOwnerRemovedDataProviderEvent.OutputObject
    >;
    AlloraConsumerOwnerRemovedDataProvider: TypedContractEvent<
      AlloraConsumerOwnerRemovedDataProviderEvent.InputTuple,
      AlloraConsumerOwnerRemovedDataProviderEvent.OutputTuple,
      AlloraConsumerOwnerRemovedDataProviderEvent.OutputObject
    >;

    "AlloraConsumerOwnerUpdatedFutureDataValiditySeconds(uint48)": TypedContractEvent<
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.InputTuple,
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputTuple,
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputObject
    >;
    AlloraConsumerOwnerUpdatedFutureDataValiditySeconds: TypedContractEvent<
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.InputTuple,
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputTuple,
      AlloraConsumerOwnerUpdatedFutureDataValiditySecondsEvent.OutputObject
    >;

    "AlloraConsumerOwnerUpdatedPastDataValiditySeconds(uint48)": TypedContractEvent<
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.InputTuple,
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputTuple,
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputObject
    >;
    AlloraConsumerOwnerUpdatedPastDataValiditySeconds: TypedContractEvent<
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.InputTuple,
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputTuple,
      AlloraConsumerOwnerUpdatedPastDataValiditySecondsEvent.OutputObject
    >;

    "AlloraConsumerVerifiedData(uint256,uint256,address,bytes)": TypedContractEvent<
      AlloraConsumerVerifiedDataEvent.InputTuple,
      AlloraConsumerVerifiedDataEvent.OutputTuple,
      AlloraConsumerVerifiedDataEvent.OutputObject
    >;
    AlloraConsumerVerifiedData: TypedContractEvent<
      AlloraConsumerVerifiedDataEvent.InputTuple,
      AlloraConsumerVerifiedDataEvent.OutputTuple,
      AlloraConsumerVerifiedDataEvent.OutputObject
    >;

    "AlloraConsumerVerifiedNetworkInferenceData(uint256,uint256,uint256,bytes)": TypedContractEvent<
      AlloraConsumerVerifiedNetworkInferenceDataEvent.InputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputObject
    >;
    AlloraConsumerVerifiedNetworkInferenceData: TypedContractEvent<
      AlloraConsumerVerifiedNetworkInferenceDataEvent.InputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataEvent.OutputObject
    >;

    "AlloraConsumerVerifiedNetworkInferenceDataAndInterval(uint256,uint256,uint256,uint256,uint256,bytes)": TypedContractEvent<
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.InputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputObject
    >;
    AlloraConsumerVerifiedNetworkInferenceDataAndInterval: TypedContractEvent<
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.InputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputTuple,
      AlloraConsumerVerifiedNetworkInferenceDataAndIntervalEvent.OutputObject
    >;

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;

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