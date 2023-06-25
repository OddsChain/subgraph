import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BetWinnings_Claimed,
  Bet_Accepted,
  Bet_Denied,
  Bet_Joined,
  Bet_Refunded,
  Bet_Validated,
  SingleBet_Created,
  ValidatorReportDecided,
  Validator_Assigned,
  Validator_Joined,
  Validator_Reported,
  supportValidator
} from "../generated/Odd/Odd"

export function createBetWinnings_ClaimedEvent(
  betID: BigInt,
  user: Address,
  winnings: BigInt
): BetWinnings_Claimed {
  let betWinningsClaimedEvent = changetype<BetWinnings_Claimed>(newMockEvent())

  betWinningsClaimedEvent.parameters = new Array()

  betWinningsClaimedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betWinningsClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  betWinningsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "winnings",
      ethereum.Value.fromUnsignedBigInt(winnings)
    )
  )

  return betWinningsClaimedEvent
}

export function createBet_AcceptedEvent(
  betID: BigInt,
  choice: boolean,
  validator: Address,
  betEndTime: BigInt
): Bet_Accepted {
  let betAcceptedEvent = changetype<Bet_Accepted>(newMockEvent())

  betAcceptedEvent.parameters = new Array()

  betAcceptedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betAcceptedEvent.parameters.push(
    new ethereum.EventParam("choice", ethereum.Value.fromBoolean(choice))
  )
  betAcceptedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  betAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "betEndTime",
      ethereum.Value.fromUnsignedBigInt(betEndTime)
    )
  )

  return betAcceptedEvent
}

export function createBet_DeniedEvent(
  betID: BigInt,
  choice: boolean,
  validator: Address
): Bet_Denied {
  let betDeniedEvent = changetype<Bet_Denied>(newMockEvent())

  betDeniedEvent.parameters = new Array()

  betDeniedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betDeniedEvent.parameters.push(
    new ethereum.EventParam("choice", ethereum.Value.fromBoolean(choice))
  )
  betDeniedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )

  return betDeniedEvent
}

export function createBet_JoinedEvent(
  betID: BigInt,
  amount: BigInt,
  user: Address,
  participants: Array<Address>,
  yesPool: BigInt,
  noPool: BigInt,
  totalPool: BigInt,
  yesParticipants: BigInt,
  noParticipants: BigInt
): Bet_Joined {
  let betJoinedEvent = changetype<Bet_Joined>(newMockEvent())

  betJoinedEvent.parameters = new Array()

  betJoinedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "participants",
      ethereum.Value.fromAddressArray(participants)
    )
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "yesPool",
      ethereum.Value.fromUnsignedBigInt(yesPool)
    )
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam("noPool", ethereum.Value.fromUnsignedBigInt(noPool))
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "totalPool",
      ethereum.Value.fromUnsignedBigInt(totalPool)
    )
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "yesParticipants",
      ethereum.Value.fromUnsignedBigInt(yesParticipants)
    )
  )
  betJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "noParticipants",
      ethereum.Value.fromUnsignedBigInt(noParticipants)
    )
  )

  return betJoinedEvent
}

export function createBet_RefundedEvent(
  betID: BigInt,
  user: Address,
  refundAmount: BigInt
): Bet_Refunded {
  let betRefundedEvent = changetype<Bet_Refunded>(newMockEvent())

  betRefundedEvent.parameters = new Array()

  betRefundedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betRefundedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  betRefundedEvent.parameters.push(
    new ethereum.EventParam(
      "refundAmount",
      ethereum.Value.fromUnsignedBigInt(refundAmount)
    )
  )

  return betRefundedEvent
}

export function createBet_ValidatedEvent(
  betID: BigInt,
  outcome: BigInt,
  validator: Address,
  claimWaitTime: BigInt,
  validationCount: BigInt
): Bet_Validated {
  let betValidatedEvent = changetype<Bet_Validated>(newMockEvent())

  betValidatedEvent.parameters = new Array()

  betValidatedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  betValidatedEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(outcome)
    )
  )
  betValidatedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  betValidatedEvent.parameters.push(
    new ethereum.EventParam(
      "claimWaitTime",
      ethereum.Value.fromUnsignedBigInt(claimWaitTime)
    )
  )
  betValidatedEvent.parameters.push(
    new ethereum.EventParam(
      "validationCount",
      ethereum.Value.fromUnsignedBigInt(validationCount)
    )
  )

  return betValidatedEvent
}

export function createSingleBet_CreatedEvent(
  betID: BigInt,
  description: string,
  betType: boolean,
  betEndTime: BigInt,
  creator: Address,
  validators: Array<Address>
): SingleBet_Created {
  let singleBetCreatedEvent = changetype<SingleBet_Created>(newMockEvent())

  singleBetCreatedEvent.parameters = new Array()

  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam("betType", ethereum.Value.fromBoolean(betType))
  )
  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "betEndTime",
      ethereum.Value.fromUnsignedBigInt(betEndTime)
    )
  )
  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  singleBetCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "validators",
      ethereum.Value.fromAddressArray(validators)
    )
  )

  return singleBetCreatedEvent
}

export function createValidatorReportDecidedEvent(
  reportOutcome: BigInt,
  betID: BigInt
): ValidatorReportDecided {
  let validatorReportDecidedEvent = changetype<ValidatorReportDecided>(
    newMockEvent()
  )

  validatorReportDecidedEvent.parameters = new Array()

  validatorReportDecidedEvent.parameters.push(
    new ethereum.EventParam(
      "reportOutcome",
      ethereum.Value.fromUnsignedBigInt(reportOutcome)
    )
  )
  validatorReportDecidedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )

  return validatorReportDecidedEvent
}

export function createValidator_AssignedEvent(
  betID: BigInt,
  betType: boolean,
  randomNumber: BigInt,
  validator: Address
): Validator_Assigned {
  let validatorAssignedEvent = changetype<Validator_Assigned>(newMockEvent())

  validatorAssignedEvent.parameters = new Array()

  validatorAssignedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  validatorAssignedEvent.parameters.push(
    new ethereum.EventParam("betType", ethereum.Value.fromBoolean(betType))
  )
  validatorAssignedEvent.parameters.push(
    new ethereum.EventParam(
      "randomNumber",
      ethereum.Value.fromUnsignedBigInt(randomNumber)
    )
  )
  validatorAssignedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )

  return validatorAssignedEvent
}

export function createValidator_JoinedEvent(
  validator: Address,
  validatorId: BigInt
): Validator_Joined {
  let validatorJoinedEvent = changetype<Validator_Joined>(newMockEvent())

  validatorJoinedEvent.parameters = new Array()

  validatorJoinedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorJoinedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )

  return validatorJoinedEvent
}

export function createValidator_ReportedEvent(
  reporter: Address,
  validator: Address,
  description: string,
  betID: BigInt,
  voteTime: BigInt
): Validator_Reported {
  let validatorReportedEvent = changetype<Validator_Reported>(newMockEvent())

  validatorReportedEvent.parameters = new Array()

  validatorReportedEvent.parameters.push(
    new ethereum.EventParam("reporter", ethereum.Value.fromAddress(reporter))
  )
  validatorReportedEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  validatorReportedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  validatorReportedEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  validatorReportedEvent.parameters.push(
    new ethereum.EventParam(
      "voteTime",
      ethereum.Value.fromUnsignedBigInt(voteTime)
    )
  )

  return validatorReportedEvent
}

export function createsupportValidatorEvent(
  choice: boolean,
  betID: BigInt,
  voter: Address,
  support: BigInt,
  oppose: BigInt
): supportValidator {
  let supportValidatorEvent = changetype<supportValidator>(newMockEvent())

  supportValidatorEvent.parameters = new Array()

  supportValidatorEvent.parameters.push(
    new ethereum.EventParam("choice", ethereum.Value.fromBoolean(choice))
  )
  supportValidatorEvent.parameters.push(
    new ethereum.EventParam("betID", ethereum.Value.fromUnsignedBigInt(betID))
  )
  supportValidatorEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  supportValidatorEvent.parameters.push(
    new ethereum.EventParam(
      "support",
      ethereum.Value.fromUnsignedBigInt(support)
    )
  )
  supportValidatorEvent.parameters.push(
    new ethereum.EventParam("oppose", ethereum.Value.fromUnsignedBigInt(oppose))
  )

  return supportValidatorEvent
}
