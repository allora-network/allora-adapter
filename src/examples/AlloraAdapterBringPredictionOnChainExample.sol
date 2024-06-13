// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { IAlloraConsumer, TopicValue, AlloraConsumerNetworkInferenceData } from '../interface/IAlloraConsumer.sol';
import { Ownable2Step } from "../../lib/openzeppelin-contracts/contracts/access/Ownable2Step.sol";
import { EnumerableSet } from "../../lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol";


/**
 * @title AlloraConsumerBringPredictionOnChainExample
 * @notice Example contract for using the Allora consumer by bringing predictions on-chain
 */
contract AlloraConsumerBringPredictionOnChainExample is Ownable2Step {

    // Sepolia consumer Address
    IAlloraConsumer public alloraConsumer = IAlloraConsumer(0x4341a3F0a350C2428184a727BAb86e16D4ba7018);

    // ***************************************************************
    // * ================== USER INTERFACE ========================= *
    // ***************************************************************

    /**
     * @notice Example for calling a protocol function with using an inedex value already stored on the
     *   Allora Consumer, only if the value is not stale
     * 
     * @param protocolFunctionArgument An argument for the protocol function
     * @param topicId The id of the topic to use the most recent stored value for
     */
    function callProtocolFunctionWithExistingValue(
        uint256 protocolFunctionArgument,
        uint256 topicId
    ) external payable {
        TopicValue memory topicValue = IAlloraConsumer(0x4341a3F0a350C2428184a727BAb86e16D4ba7018).getTopicValue(topicId, '');

        if (topicValue.recentValueTime + 1 hours < block.timestamp) {
            revert('AlloraConsumerBringPredictionOnChainExample: stale value');
        }

        _protocolFunctionRequiringPredictionValue(protocolFunctionArgument, topicValue.recentValue);
    }

    /**
     * @notice Example for calling a protocol function with a prediction value from the Allora Consumer
     * 
     * @param protocolFunctionArgument An argument for the protocol function
     * @param alloraNetworkInferenceData The signed data from the Allora Consumer
     */
    function callProtocolFunctionWithAlloraConsumerPredictionValue(
        uint256 protocolFunctionArgument,
        AlloraConsumerNetworkInferenceData calldata alloraNetworkInferenceData
    ) external payable {
        (uint256 value,,,) = IAlloraConsumer(0x4341a3F0a350C2428184a727BAb86e16D4ba7018).verifyNetworkInference(alloraNetworkInferenceData);

        _protocolFunctionRequiringPredictionValue(protocolFunctionArgument, value);
    }

    function _protocolFunctionRequiringPredictionValue(uint256 protocolFunctionArgument, uint256 value) internal {
        // use arguments and value 
    }

    // ***************************************************************
    // * ========================= ADMIN =========================== *
    // ***************************************************************

    /**
     * @notice Set the AlloraConsumer contract address
     * 
     * @param alloraConsumer_ The AlloraConsumer contract address
     */
    function setAlloraConsumerContract(IAlloraConsumer alloraConsumer_) external onlyOwner {
        alloraConsumer = alloraConsumer_;
    }
}
