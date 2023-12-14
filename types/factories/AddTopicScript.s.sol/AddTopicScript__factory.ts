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
  AddTopicScript,
  AddTopicScriptInterface,
} from "../../AddTopicScript.s.sol/AddTopicScript";

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
  "0x6080604052600b805462ff00ff19166201000117905534801561002157600080fd5b506107cc806100316000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf4714610045575b600080fd5b61004361006c565b005b600b546100589062010000900460ff1681565b604051901515815260200160405180910390f35b60405163c1978d1f60e01b815260206004820152601960248201527f5343524950545f52554e4e45525f505249564154455f4b4559000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa1580156100ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610110919061054e565b6040516001625e79b760e01b0319815260048101829052909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa1864990602401602060405180830381865afa158015610169573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018d9190610567565b60405163ce817d4760e01b81526004810184905290915073766662c5078515a9d22a71ab695206acd18dd44c90737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101f357600080fd5b505af1158015610207573d6000803e3d6000fd5b5050505061024a6040518060400160405280601781526020017f42726f6164636173742073746172746564206279202573000000000000000000815250836104a3565b604080516101a081018252601f61016082019081527f4574682f55534420507269636520666565642c20313820646563696d616c730061018083015281526001600160a01b03841660208201526000818301819052606082018190526080820181905273dc31b5ea06389a124ff3cfbd71fdc35da5a64f4760a0830152600160c0830181905260e0830181905273ed3b6e434ebd994ff42bc1088fb062f8faa4f8936101008401526101208301819052610e1061014084015283518181528085019094529192909181602001602082028036833701905050905073a459c3a3b7769e18e702a3b5e2decdd4956557918160008151811061034c5761034c610597565b6001600160a01b039283166020918202929092018101919091526040805180820182528581529182018490525163081f53f760e21b815290916000919086169063207d4fdc906103a0908590600401610637565b6020604051808303816000875af11580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e3919061054e565b90506104246040518060400160405280601a81526020017f546f7069632067656e6572617465642077697468206964202573000000000000815250826104ec565b7f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561048257600080fd5b505af1158015610496573d6000803e3d6000fd5b5050505050505050505050565b6104e882826040516024016104b992919061074a565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905261052d565b5050565b6104e88282604051602401610502929190610774565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561056057600080fd5b5051919050565b60006020828403121561057957600080fd5b81516001600160a01b038116811461059057600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156105d3576020818501810151868301820152016105b7565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501945080840160005b8381101561062c5781516001600160a01b031687529582019590820190600101610607565b509495945050505050565b602081526000825160406020840152805161016080606086015261065f6101c08601836105ad565b9150602083015161067b60808701826001600160a01b03169052565b50604083015165ffffffffffff811660a087015250606083015160c0860152608083015160e086015260a08301516101006106c0818801836001600160a01b03169052565b60c085015191506101206106d78189018415159052565b60e086015192506101406106ee818a018515159052565b918601516001600160a01b0316938801939093529184015165ffffffffffff90811661018088015293909101519092166101a08501526020850151848203601f19016040860152915061074181836105f3565b95945050505050565b60408152600061075d60408301856105ad565b905060018060a01b03831660208301529392505050565b60408152600061078760408301856105ad565b9050826020830152939250505056fea26469706673582212209c81f569e756aaddc6c51c8ef57284d069781e656038b7e2f848120788675fd864736f6c63430008150033";

type AddTopicScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddTopicScriptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddTopicScript__factory extends ContractFactory {
  constructor(...args: AddTopicScriptConstructorParams) {
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
      AddTopicScript & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddTopicScript__factory {
    return super.connect(runner) as AddTopicScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddTopicScriptInterface {
    return new Interface(_abi) as AddTopicScriptInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddTopicScript {
    return new Contract(address, _abi, runner) as unknown as AddTopicScript;
  }
}
