/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IFeeHandler, IFeeHandlerInterface } from "../IFeeHandler";

const _abi = [
  {
    type: "function",
    name: "handleFees",
    inputs: [
      {
        name: "feedOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeReceivers",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "extraData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IFeeHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeHandlerInterface {
    return new Interface(_abi) as IFeeHandlerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IFeeHandler {
    return new Contract(address, _abi, runner) as unknown as IFeeHandler;
  }
}
