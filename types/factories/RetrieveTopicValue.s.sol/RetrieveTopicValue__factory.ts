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
import type { NonPayableOverrides } from "../../common";
import type {
  RetrieveTopicValue,
  RetrieveTopicValueInterface,
} from "../../RetrieveTopicValue.s.sol/RetrieveTopicValue";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
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
    name: "run",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x6080604052600b805462ff00ff19166201000117905534801561002157600080fd5b506105a8806100316000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf4714610045575b600080fd5b61004361006c565b005b600b546100589062010000900460ff1681565b604051901515815260200160405180910390f35b60405163c1978d1f60e01b815260206004820152601960248201527f5343524950545f52554e4e45525f505249564154455f4b4559000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa1580156100ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011091906103ec565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561016057600080fd5b505af1158015610174573d6000803e3d6000fd5b5050604080518082018252601781527f42726f6164636173742073746172746564206279202573000000000000000000602082015290516001625e79b760e01b031981526004810185905261022c9350909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa1864990602401602060405180830381865afa158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610405565b610345565b60408051630f6bcd5b60e31b81526001600482015260248101919091526000604482018190529073238d0abd53fc68fafa0ccd860446e381b400b5be90637b5e6ad890606401608060405180830381865afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190610452565b90506102f46040518060400160405280601081526020016f149958d95b9d0815985b1d594e88095960821b81525082600001516001600160c01b031661038a565b6103416040518060400160405280601a81526020017f526563656e742056616c75652054696d657374616d703a202564000000000000815250826020015167ffffffffffffffff1661038a565b5050565b610341828260405160240161035b929190610526565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790526103cb565b61034182826040516024016103a0929190610550565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156103fe57600080fd5b5051919050565b60006020828403121561041757600080fd5b81516001600160a01b038116811461042e57600080fd5b9392505050565b805167ffffffffffffffff8116811461044d57600080fd5b919050565b60006080828403121561046457600080fd5b6040516080810181811067ffffffffffffffff8211171561049557634e487b7160e01b600052604160045260246000fd5b60405282516001600160c01b03811681146104af57600080fd5b81526104bd60208401610435565b602082015260408301516040820152606083015160608201528091505092915050565b6000815180845260005b81811015610506576020818501810151868301820152016104ea565b506000602082860101526020601f19601f83011685010191505092915050565b60408152600061053960408301856104e0565b905060018060a01b03831660208301529392505050565b60408152600061056360408301856104e0565b9050826020830152939250505056fea26469706673582212202796ea1e9b6ecbe6bb0b572ae1688bf16144675430ee11e82ae8568f650dc0e464736f6c63430008150033";

type RetrieveTopicValueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RetrieveTopicValueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RetrieveTopicValue__factory extends ContractFactory {
  constructor(...args: RetrieveTopicValueConstructorParams) {
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
      RetrieveTopicValue & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RetrieveTopicValue__factory {
    return super.connect(runner) as RetrieveTopicValue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RetrieveTopicValueInterface {
    return new Interface(_abi) as RetrieveTopicValueInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RetrieveTopicValue {
    return new Contract(address, _abi, runner) as unknown as RetrieveTopicValue;
  }
}
