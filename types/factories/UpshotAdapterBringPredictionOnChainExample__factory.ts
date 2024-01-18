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
  UpshotAdapterBringPredictionOnChainExample,
  UpshotAdapterBringPredictionOnChainExampleInterface,
} from "../UpshotAdapterBringPredictionOnChainExample";

const _abi = [
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "callProtocolFunctionWithExistingIndexValue",
    inputs: [
      {
        name: "protocolFunctionArgument",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "topicId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "callProtocolFunctionWithUpshotAdapterPredictionValue",
    inputs: [
      {
        name: "protocolFunctionArgument",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "upshotAdapterData",
        type: "tuple",
        internalType: "struct UpshotAdapterNumericData",
        components: [
          {
            name: "signedNumericData",
            type: "tuple[]",
            internalType: "struct SignedNumericData[]",
            components: [
              {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "numericData",
                type: "tuple",
                internalType: "struct NumericData",
                components: [
                  {
                    name: "topicId",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "timestamp",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "numericValue",
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
          },
          {
            name: "extraData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
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
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUpshotAdapterContract",
    inputs: [
      {
        name: "upshotAdapter_",
        type: "address",
        internalType: "contract IUpshotAdapter",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "upshotAdapter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IUpshotAdapter",
      },
    ],
    stateMutability: "view",
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
] as const;

const _bytecode =
  "0x6080604052600280546001600160a01b031916734341a3f0a350c2428184a727bab86e16d4ba701817905534801561003657600080fd5b5061004033610045565b6100b1565b600180546001600160a01b031916905561005e81610061565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610a40806100c06000396000f3fe6080604052600436106100865760003560e01c8063b065be4011610059578063b065be4014610100578063b0845d4314610120578063e30c397814610133578063e90d437814610151578063f2fde38b1461017157600080fd5b8063715018a61461008b57806379ba5097146100a25780638a08a8c5146100b75780638da5cb5b146100ca575b600080fd5b34801561009757600080fd5b506100a0610191565b005b3480156100ae57600080fd5b506100a06101a5565b6100a06100c5366004610525565b610224565b3480156100d657600080fd5b506000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b34801561010c57600080fd5b506100a061011b36600461055c565b610342565b6100a061012e366004610580565b61036c565b34801561013f57600080fd5b506001546001600160a01b03166100e4565b34801561015d57600080fd5b506002546100e4906001600160a01b031681565b34801561017d57600080fd5b506100a061018c36600461055c565b6103f6565b610199610467565b6101a360006104c1565b565b60015433906001600160a01b031681146102185760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084015b60405180910390fd5b610221816104c1565b50565b60408051630f6bcd5b60e31b815260048101839052602481019190915260006044820181905290734341a3f0a350c2428184a727bab86e16d4ba701890637b5e6ad8906064016040805180830381865afa158015610286573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102aa9190610615565b9050428160200151610e106102bf919061068d565b67ffffffffffffffff16101561033d5760405162461bcd60e51b815260206004820152603760248201527f557073686f74416461707465724272696e6750726564696374696f6e4f6e436860448201527f61696e4578616d706c653a207374616c652076616c7565000000000000000000606482015260840161020f565b505050565b61034a610467565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b604051636214bda160e01b8152600090734341a3f0a350c2428184a727bab86e16d4ba701890636214bda1906103a6908590600401610739565b6000604051808303816000875af11580156103c5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103ed9190810190610920565b50505050505050565b6103fe610467565b600180546001600160a01b0383166001600160a01b0319909116811790915561042f6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6000546001600160a01b031633146101a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161020f565b600180546001600160a01b031916905561022181600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806040838503121561053857600080fd5b50508035926020909101359150565b6001600160a01b038116811461022157600080fd5b60006020828403121561056e57600080fd5b813561057981610547565b9392505050565b6000806040838503121561059357600080fd5b82359150602083013567ffffffffffffffff8111156105b157600080fd5b8301604081860312156105c357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561060d5761060d6105ce565b604052919050565b60006040828403121561062757600080fd5b6040516040810167ffffffffffffffff828210818311171561064b5761064b6105ce565b6040919091528351906001600160c01b038216821461066957600080fd5b908252602084015190808216821461068057600080fd5b5060208201529392505050565b67ffffffffffffffff8181168382160190808211156106bc57634e487b7160e01b600052601160045260246000fd5b5092915050565b6000808335601e198436030181126106da57600080fd5b830160208101925035905067ffffffffffffffff8111156106fa57600080fd5b80360382131561070957600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000602080835260608084018535601e1987360301811261075957600080fd5b8601803584820167ffffffffffffffff82111561077557600080fd5b8160051b80360382131561078857600080fd5b604089880181905294839052608094908901850190858a01600036879003605e19015b86821015610863578c8503607f1901835285358181126107ca57600080fd5b88018b81016107d981806106c3565b91508688526107eb8789018383610710565b91505085820135609e1983360301811261080457600080fd5b8281019250508c82018782038e89015280358252868301358e8301528c830135878301526108348c8401826106c3565b935090508b8d83015261084a8c83018483610710565b988e019897505050928b019250600191909101906107ab565b505050610872888c018c6106c3565b98509650601f198a830301818b01525061088d818888610710565b9a9950505050505050505050565b600082601f8301126108ac57600080fd5b815167ffffffffffffffff8111156108c6576108c66105ce565b60206108da601f8301601f191682016105e4565b82815285828487010111156108ee57600080fd5b60005b8381101561090c5785810183015182820184015282016108f1565b506000928101909101919091529392505050565b6000806000806080858703121561093657600080fd5b845193506020808601519350604086015167ffffffffffffffff8082111561095d57600080fd5b818801915088601f83011261097157600080fd5b815181811115610983576109836105ce565b8060051b6109928582016105e4565b918252838101850191858101908c8411156109ac57600080fd5b948601945b838610156109d657855192506109c683610547565b82825294860194908601906109b1565b60608c01519098509550505050808311156109f057600080fd5b50506109fe8782880161089b565b9150509295919450925056fea2646970667358221220de62ebaaab698b245b89049a3d6c0da758bd0c6c929ed33451a99b2428ab7c8964736f6c63430008150033";

type UpshotAdapterBringPredictionOnChainExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpshotAdapterBringPredictionOnChainExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpshotAdapterBringPredictionOnChainExample__factory extends ContractFactory {
  constructor(
    ...args: UpshotAdapterBringPredictionOnChainExampleConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UpshotAdapterBringPredictionOnChainExample & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): UpshotAdapterBringPredictionOnChainExample__factory {
    return super.connect(
      runner
    ) as UpshotAdapterBringPredictionOnChainExample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpshotAdapterBringPredictionOnChainExampleInterface {
    return new Interface(
      _abi
    ) as UpshotAdapterBringPredictionOnChainExampleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UpshotAdapterBringPredictionOnChainExample {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as UpshotAdapterBringPredictionOnChainExample;
  }
}
