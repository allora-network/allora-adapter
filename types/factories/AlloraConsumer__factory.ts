/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  AlloraConsumer,
  AlloraConsumerInterface,
  AlloraConsumerConstructorArgsStruct,
} from "../AlloraConsumer";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "args",
        type: "tuple",
        internalType: "struct AlloraConsumerConstructorArgs",
        components: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "NUMERIC_DATA_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addDataProvider",
    inputs: [
      {
        name: "dataProvider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        name: "fields",
        type: "bytes1",
        internalType: "bytes1",
      },
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "version",
        type: "string",
        internalType: "string",
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "extensions",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "futureDataValiditySeconds",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNetworkInferenceMessage",
    inputs: [
      {
        name: "networkInferenceData",
        type: "tuple",
        internalType: "struct NetworkInferenceData",
        components: [
          {
            name: "networkInference",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "topicId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "confidenceIntervalLowerBound",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "confidenceIntervalUpperBound",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "extraData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTopicValue",
    inputs: [
      {
        name: "topicId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "extraData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct TopicValue",
        components: [
          {
            name: "recentValue",
            type: "uint192",
            internalType: "uint192",
          },
          {
            name: "recentValueTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "recentConfidenceIntervalLowerBound",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "recentConfidenceIntervalUpperBound",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pastDataValiditySeconds",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeDataProvider",
    inputs: [
      {
        name: "dataProvider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "switchedOn",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "topicValue",
    inputs: [
      {
        name: "topicId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "extraData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "recentValue",
        type: "uint192",
        internalType: "uint192",
      },
      {
        name: "recentValueTime",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "recentConfidenceIntervalLowerBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "recentConfidenceIntervalUpperBound",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "turnOffConsumer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "turnOnConsumer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateFutureDataValiditySeconds",
    inputs: [
      {
        name: "_futureDataValiditySeconds",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePastDataValiditySeconds",
    inputs: [
      {
        name: "_pastDataValiditySeconds",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "validDataProvider",
    inputs: [
      {
        name: "dataProvider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifyNetworkInference",
    inputs: [
      {
        name: "nd",
        type: "tuple",
        internalType: "struct AlloraConsumerNetworkInferenceData",
        components: [
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "networkInference",
            type: "tuple",
            internalType: "struct NetworkInferenceData",
            components: [
              {
                name: "networkInference",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "timestamp",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "topicId",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "confidenceIntervalLowerBound",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "confidenceIntervalUpperBound",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "extraData",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "extraData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "networkInference",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalLowerBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalUpperBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "dataProvider",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyNetworkInferenceViewOnly",
    inputs: [
      {
        name: "nd",
        type: "tuple",
        internalType: "struct AlloraConsumerNetworkInferenceData",
        components: [
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "networkInference",
            type: "tuple",
            internalType: "struct NetworkInferenceData",
            components: [
              {
                name: "networkInference",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "timestamp",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "topicId",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "confidenceIntervalLowerBound",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "confidenceIntervalUpperBound",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "extraData",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "extraData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "networkInference",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalLowerBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalUpperBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "dataProvider",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AlloraConsumerAdminTurnedOff",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerAdminTurnedOn",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerOwnerAddedDataProvider",
    inputs: [
      {
        name: "dataProvider",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerOwnerRemovedDataProvider",
    inputs: [
      {
        name: "dataProvider",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerOwnerUpdatedFutureDataValiditySeconds",
    inputs: [
      {
        name: "futureDataValiditySeconds",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerOwnerUpdatedPastDataValiditySeconds",
    inputs: [
      {
        name: "pastDataValiditySeconds",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerVerifiedData",
    inputs: [
      {
        name: "topicId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "numericData",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "dataProvider",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "extraData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerVerifiedNetworkInferenceData",
    inputs: [
      {
        name: "networkInference",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "topicId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "extraData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AlloraConsumerVerifiedNetworkInferenceDataAndInterval",
    inputs: [
      {
        name: "networkInference",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "topicId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalLowerBound",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "confidenceIntervalUpperBound",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "extraData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AlloraConsumerInvalidAggregator",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerInvalidConfidenceInterval",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerInvalidDataProvider",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerInvalidDataTime",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerInvalidDataValiditySeconds",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerNoDataProvided",
    inputs: [],
  },
  {
    type: "error",
    name: "AlloraConsumerNotSwitchedOn",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      {
        name: "bits",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        name: "str",
        type: "string",
        internalType: "string",
      },
    ],
  },
] as const;

const _bytecode =
  "0x6101606040526005805460ff191660011790556007805467012c000000000e106001600160601b03199091161790553480156200003b57600080fd5b5060405162001cc138038062001cc18339810160408190526200005e916200028f565b6040518060400160405280600e81526020016d20b63637b930a1b7b739bab6b2b960911b815250604051806040016040528060018152602001603160f81b815250620000b9620000b36200018260201b60201c565b62000186565b620000c6826002620001a4565b61012052620000d7816003620001a4565b61014052815160208084019190912060e052815190820120610100524660a0526200016560e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05280516200017b9062000186565b50620004bb565b3390565b600180546001600160a01b0319169055620001a181620001dd565b50565b6000602083511015620001c457620001bc836200022d565b9050620001d7565b81620001d184826200037a565b5060ff90505b92915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080829050601f8151111562000264578260405163305a27a960e01b81526004016200025b919062000446565b60405180910390fd5b8051620002718262000496565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215620002a257600080fd5b604051602081016001600160401b0381118282101715620002c757620002c762000279565b60405282516001600160a01b0381168114620002e257600080fd5b81529392505050565b600181811c908216806200030057607f821691505b6020821081036200032157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200037557600081815260208120601f850160051c81016020861015620003505750805b601f850160051c820191505b8181101562000371578281556001016200035c565b5050505b505050565b81516001600160401b0381111562000396576200039662000279565b620003ae81620003a78454620002eb565b8462000327565b602080601f831160018114620003e65760008415620003cd5750858301515b600019600386901b1c1916600185901b17855562000371565b600085815260208120601f198616915b828110156200041757888601518255948401946001909101908401620003f6565b5085821015620004365787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083528351808285015260005b81811015620004755785810183015185820160400152820162000457565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620003215760001960209190910360031b1b16919050565b60805160a05160c05160e0516101005161012051610140516117ab6200051660003960006108320152600061080701526000610e4d01526000610e2501526000610d8001526000610daa01526000610dd401526117ab6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063a2359546116100b8578063d4b8edd31161007c578063d4b8edd3146103ac578063e30c3978146103b4578063f2fde38b146103c5578063f52cbe77146103d8578063f9244dd7146103fb578063fde6e58f1461040e57600080fd5b8063a2359546146102c9578063ae3ed65914610361578063bc62b5cb14610369578063d212e8461461037c578063d395c95e1461038f57600080fd5b8063715018a61161010a578063715018a6146101e5578063777bfc9c146101ed57806379ba5097146102295780637b5e6ad81461023157806384b0196e146102895780638da5cb5b146102a457600080fd5b806303117fbd14610147578063129c1a731461015c57806350910ad61461018a578063669d08f41461019d5780636a8d7b1a146101be575b600080fd5b61015a610155366004611208565b610427565b005b60075461016e9065ffffffffffff1681565b60405165ffffffffffff90911681526020015b60405180910390f35b61015a610198366004611237565b6104bd565b6101b06101ab3660046113c0565b610519565b604051908152602001610181565b6101b07f22ed434bda4cce5a10ec4f276f033905f95a4675d162412a6ee32bbb9d348d6a81565b61015a610594565b6102006101fb3660046113fc565b6105a8565b604080519485526020850193909352918301526001600160a01b03166060820152608001610181565b61015a6106dc565b61024461023f3660046114b0565b61075b565b604051610181919081516001600160c01b031681526020808301516001600160401b031690820152604080830151908201526060918201519181019190915260800190565b6102916107f9565b604051610181979695949392919061157b565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610181565b61032f6102d7366004611611565b600460209081526000928352604090922081518083018401805192815290840192909301919091209152805460018201546002909201546001600160c01b03821692600160c01b9092046001600160401b0316919084565b604080516001600160c01b0390951685526001600160401b039093166020850152918301526060820152608001610181565b61015a610882565b61015a610377366004611208565b6108bf565b61020061038a3660046113fc565b61093c565b60055461039c9060ff1681565b6040519015158152602001610181565b61015a61095a565b6001546001600160a01b03166102b1565b61015a6103d3366004611237565b61099a565b61039c6103e6366004611237565b60066020526000908152604090205460ff1681565b61015a610409366004611237565b610a0b565b60075461016e90600160301b900465ffffffffffff1681565b61042f610a64565b8065ffffffffffff166000036104585760405163c469d5e360e01b815260040160405180910390fd5b600780546bffffffffffff0000000000001916600160301b65ffffffffffff8481168202929092179283905560405192041681527fe6c064ad2382c001ee1d6eef8a061af28d834451f507593a25822a967880edab906020015b60405180910390a150565b6104c5610a64565b6001600160a01b038116600081815260066020908152604091829020805460ff1916600117905590519182527f8042bd7385daff8fe89536683f5922dcaf1d14b07486b217e068aebd9f5e7b8b91016104b2565b600061058e7f22ed434bda4cce5a10ec4f276f033905f95a4675d162412a6ee32bbb9d348d6a836000015184602001518560400151866060015187608001518860a001516040516020016105739796959493929190611657565b60405160208183030381529060405280519060200120610abe565b92915050565b61059c610a64565b6105a66000610aeb565b565b6000806000806105b785610b04565b604080516080810190915293975091955093509150806105d686610c59565b6001600160c01b031681526020016105ed42610c91565b6001600160401b0316815260200184815260200183815250600460008760200151604001518152602001908152602001600020866020015160a00151604051610636919061169b565b9081526040805191829003602090810183208451858301516001600160401b0316600160c01b026001600160c01b0390911617815584830151600182015560609485015160029091015588810151908101519181015193810151608082015160a0909201517fb1ce27c9ca19a52897293e963873b08e25e65937dda1cc80bac33e71fdb58e68956106cd958b9594919392906116b7565b60405180910390a19193509193565b60015433906001600160a01b0316811461074f5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084015b60405180910390fd5b61075881610aeb565b50565b60408051608081018252600080825260208201819052918101829052606081019190915260008481526004602052604090819020905161079e90859085906116f4565b908152604080516020928190038301812060808201835280546001600160c01b0381168352600160c01b90046001600160401b0316938201939093526001830154918101919091526002909101546060820152949350505050565b60006060808280808361082d7f00000000000000000000000000000000000000000000000000000000000000006002610cc7565b6108587f00000000000000000000000000000000000000000000000000000000000000006003610cc7565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b61088a610a64565b6005805460ff191690556040517f6567f235036031650de3c95c30a7ef81229fc452d7c2ad21843d7e912cdebf8890600090a1565b6108c7610a64565b8065ffffffffffff166000036108f05760405163c469d5e360e01b815260040160405180910390fd5b6007805465ffffffffffff191665ffffffffffff83169081179091556040519081527fe8f4786a82e299e9a9029aa99f9e3bd8f1e47c68e95d40cd6b0d37878c1724eb906020016104b2565b60008060008061094b85610b04565b92989197509550909350915050565b610962610a64565b6005805460ff191660011790556040517f5f2c3b6787fdae3e2b69ffcc8a4f3cb7e614f4c783582fe33d9131bd763cad8690600090a1565b6109a2610a64565b600180546001600160a01b0383166001600160a01b031990911681179091556109d36000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b610a13610a64565b6001600160a01b038116600081815260066020908152604091829020805460ff1916905590519182527f5ca017314c73fbd4d01bb3ddc118930fecc38178e8144d06df9d363dfc51bfe491016104b2565b6000546001600160a01b031633146105a65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610746565b600061058e610acb610d73565b8360405161190160f01b8152600281019290925260228201526042902090565b600180546001600160a01b031916905561075881610ea3565b60055460009081908190819060ff16610b3057604051634906b59b60e01b815260040160405180910390fd5b60208086015101516007544290610b4f9065ffffffffffff1683611704565b1080610b7657506007548190610b7490600160301b900465ffffffffffff1642611704565b105b15610b945760405163e684c29560e01b815260040160405180910390fd5b602086015160808101516060909101511115610bc3576040516363f7fa0560e01b815260040160405180910390fd5b610c10610c09610bd68860200151610519565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c91909152603c902090565b8751610ef3565b9150610c1b82610f17565b610c38576040516334bcc6ab60e21b815260040160405180910390fd5b50602090940151805160608201516080909201519096919590945092509050565b60006001600160c01b03821115610c8d576040516306dfcc6560e41b815260c0600482015260248101839052604401610746565b5090565b60006001600160401b03821115610c8d57604080516306dfcc6560e41b8152600481019190915260248101839052604401610746565b606060ff8314610ce157610cda83610f4e565b905061058e565b818054610ced90611725565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1990611725565b8015610d665780601f10610d3b57610100808354040283529160200191610d66565b820191906000526020600020905b815481529060010190602001808311610d4957829003601f168201915b5050505050905092915050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610dcc57507f000000000000000000000000000000000000000000000000000000000000000046145b15610df657507f000000000000000000000000000000000000000000000000000000000000000090565b610e9e604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b905090565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000610f028585610f8d565b91509150610f0f81610fd2565b509392505050565b600080546001600160a01b038381169116148061058e5750506001600160a01b031660009081526006602052604090205460ff1690565b60606000610f5b8361111c565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000808251604103610fc35760208301516040840151606085015160001a610fb787828585611144565b94509450505050610fcb565b506000905060025b9250929050565b6000816004811115610fe657610fe661175f565b03610fee5750565b60018160048111156110025761100261175f565b0361104f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610746565b60028160048111156110635761106361175f565b036110b05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610746565b60038160048111156110c4576110c461175f565b036107585760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610746565b600060ff8216601f81111561058e57604051632cd44ac360e21b815260040160405180910390fd5b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561117b57506000905060036111ff565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156111cf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111f8576000600192509250506111ff565b9150600090505b94509492505050565b60006020828403121561121a57600080fd5b813565ffffffffffff8116811461123057600080fd5b9392505050565b60006020828403121561124957600080fd5b81356001600160a01b038116811461123057600080fd5b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561129857611298611260565b60405290565b600082601f8301126112af57600080fd5b81356001600160401b03808211156112c9576112c9611260565b604051601f8301601f19908116603f011681019082821181831017156112f1576112f1611260565b8160405283815286602085880101111561130a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060c0828403121561133c57600080fd5b60405160c081016001600160401b03828210818311171561135f5761135f611260565b81604052829350843583526020850135602084015260408501356040840152606085013560608401526080850135608084015260a08501359150808211156113a657600080fd5b506113b38582860161129e565b60a0830152505092915050565b6000602082840312156113d257600080fd5b81356001600160401b038111156113e857600080fd5b6113f48482850161132a565b949350505050565b60006020828403121561140e57600080fd5b81356001600160401b038082111561142557600080fd5b908301906060828603121561143957600080fd5b611441611276565b82358281111561145057600080fd5b61145c8782860161129e565b82525060208301358281111561147157600080fd5b61147d8782860161132a565b60208301525060408301358281111561149557600080fd5b6114a18782860161129e565b60408301525095945050505050565b6000806000604084860312156114c557600080fd5b8335925060208401356001600160401b03808211156114e357600080fd5b818601915086601f8301126114f757600080fd5b81358181111561150657600080fd5b87602082850101111561151857600080fd5b6020830194508093505050509250925092565b60005b8381101561154657818101518382015260200161152e565b50506000910152565b6000815180845261156781602086016020860161152b565b601f01601f19169290920160200192915050565b60ff60f81b881681526000602060e08184015261159b60e084018a61154f565b83810360408501526115ad818a61154f565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b818110156115ff578351835292840192918401916001016115e3565b50909c9b505050505050505050505050565b6000806040838503121561162457600080fd5b8235915060208301356001600160401b0381111561164157600080fd5b61164d8582860161129e565b9150509250929050565b8781528660208201528560408201528460608201528360808201528260a082015260e060c0820152600061168e60e083018461154f565b9998505050505050505050565b600082516116ad81846020870161152b565b9190910192915050565b86815285602082015284604082015283606082015282608082015260c060a082015260006116e860c083018461154f565b98975050505050505050565b8183823760009101908152919050565b8082018082111561058e57634e487b7160e01b600052601160045260246000fd5b600181811c9082168061173957607f821691505b60208210810361175957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212201c01a59ed9dbf3a34f67228ab46759f7476fdd940f37c308b1f053186d2311b864736f6c63430008150033";

type AlloraConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlloraConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlloraConsumer__factory extends ContractFactory {
  constructor(...args: AlloraConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    args: AlloraConsumerConstructorArgsStruct,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(args, overrides || {});
  }
  override deploy(
    args: AlloraConsumerConstructorArgsStruct,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(args, overrides || {}) as Promise<
      AlloraConsumer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AlloraConsumer__factory {
    return super.connect(runner) as AlloraConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlloraConsumerInterface {
    return new Interface(_abi) as AlloraConsumerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AlloraConsumer {
    return new Contract(address, _abi, runner) as unknown as AlloraConsumer;
  }
}
