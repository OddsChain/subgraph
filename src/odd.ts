import { BigInt } from "@graphprotocol/graph-ts"
import {
  Odd,
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
import { ExampleEntity } from "../generated/schema"

export function handleBetWinnings_Claimed(event: BetWinnings_Claimed): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.betID = event.params.betID
  entity.user = event.params.user

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.CLAIM_WINNING_WAIT_TIME(...)
  // - contract.VALIDATOR_STAKE_AMOUNT(...)
  // - contract.VALIDATOR_VOTE_TIME(...)
  // - contract._canValidate(...)
  // - contract._hasValidated(...)
  // - contract._hasVoted(...)
  // - contract._isValidator(...)
  // - contract._refundClaimed(...)
  // - contract._singleBetClaimed(...)
  // - contract._singleBetDetails(...)
  // - contract._userBetAmount(...)
  // - contract._userBetChoice(...)
  // - contract._userDetails(...)
  // - contract._userParticipation(...)
  // - contract._validators(...)
  // - contract.deployer(...)
  // - contract.destinationAddress(...)
  // - contract.destinationChain(...)
  // - contract.estimatedCrossChainGasAmount(...)
  // - contract.gasService(...)
  // - contract.gateway(...)
  // - contract.getCurrentTimeStamp(...)
  // - contract.getIsValidator(...)
  // - contract.getIsWinner(...)
  // - contract.getRequiredNumberOfValidators(...)
  // - contract.getUserDetails(...)
  // - contract.getUserOddsBalance(...)
  // - contract.getUserPossibleRewards(...)
  // - contract.getUserStakeAmount(...)
  // - contract.getUserWinnings(...)
  // - contract.hasVoted(...)
  // - contract.oddsTokenAddress(...)
  // - contract.singleBetIDCounter(...)
  // - contract.validators(...)
}

export function handleBet_Accepted(event: Bet_Accepted): void {}

export function handleBet_Denied(event: Bet_Denied): void {}

export function handleBet_Joined(event: Bet_Joined): void {}

export function handleBet_Refunded(event: Bet_Refunded): void {}

export function handleBet_Validated(event: Bet_Validated): void {}

export function handleSingleBet_Created(event: SingleBet_Created): void {}

export function handleValidatorReportDecided(
  event: ValidatorReportDecided
): void {}

export function handleValidator_Assigned(event: Validator_Assigned): void {}

export function handleValidator_Joined(event: Validator_Joined): void {}

export function handleValidator_Reported(event: Validator_Reported): void {}

export function handlesupportValidator(event: supportValidator): void {}
