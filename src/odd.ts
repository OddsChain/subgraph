import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
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
  supportValidator,
} from "../generated/Odd/Odd";
import { Bet } from "../generated/schema";

export function handleBetWinnings_Claimed(event: BetWinnings_Claimed): void {}

export function handleBet_Accepted(event: Bet_Accepted): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.endTime = event.params.betEndTime;
  betEntity.accepted = true;

  betEntity.save();
}

export function handleBet_Denied(event: Bet_Denied): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.accepted = false;

  betEntity.save();
}

export function handleBet_Joined(event: Bet_Joined): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.participants = BigInt.fromI32(event.params.participants.length);

  betEntity.yesPool = event.params.yesPool;
  betEntity.noPool = event.params.noPool;

  betEntity.yesParticipants = event.params.yesParticipants;
  betEntity.noParticipants = event.params.noParticipants;

  betEntity.save();
}

export function handleBet_Refunded(event: Bet_Refunded): void {}

export function handleBet_Validated(event: Bet_Validated): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.validationCount = event.params.validationCount;
  betEntity.claimWaitTime = event.params.claimWaitTime;
  betEntity.outCome = event.params.outcome;

  betEntity.save();
}

export function handleSingleBet_Created(event: SingleBet_Created): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.betID = event.params.betID;
  betEntity.betDescription = event.params.description;
  betEntity.betType = event.params.betType;

  // default values

  betEntity.participants = BigInt.fromI32(0);
  betEntity.creator = event.params.creator;

  betEntity.outCome = BigInt.fromI32(0);

  betEntity.validationCount = BigInt.fromI32(0);
  betEntity.claimWaitTime = BigInt.fromI32(0);

  betEntity.yesPool = BigInt.fromI32(0);
  betEntity.noPool = BigInt.fromI32(0);
  betEntity.totalPool = BigInt.fromI32(0);

  betEntity.yesParticipants = BigInt.fromI32(0);
  betEntity.noParticipants = BigInt.fromI32(0);

  betEntity.reporter = Address.zero();
  betEntity.maliciousValidator = Address.zero();
  betEntity.reportDescription = "";
  betEntity.currentlyChallenged = false;

  betEntity.voteTime = BigInt.fromI32(0);
  betEntity.support = BigInt.fromI32(0);
  betEntity.oppose = BigInt.fromI32(0);
  betEntity.reportOutcome = BigInt.fromI32(0);

  if (event.params.betType == false) {
    betEntity.validators = BigInt.fromI32(event.params.validators.length);
    betEntity.endTime = event.params.betEndTime;
    betEntity.accepted = true;
    betEntity.toBeSetTime = BigInt.fromI32(0);
  }

  if (event.params.betType == true) {
    betEntity.validators = BigInt.fromI32(0);
    betEntity.endTime = BigInt.fromI32(0);
    betEntity.accepted = false;
    betEntity.toBeSetTime = event.params.betEndTime;
  }

  betEntity.save();
}

export function handleValidatorReportDecided(
  event: ValidatorReportDecided
): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.currentlyChallenged = false;
  betEntity.reportOutcome = event.params.reportOutcome;

  betEntity.save();
}

export function handleValidator_Assigned(event: Validator_Assigned): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.validators = BigInt.fromI32(event.params.validator.length);

  betEntity.save();
}

export function handleValidator_Joined(event: Validator_Joined): void {}

export function handleValidator_Reported(event: Validator_Reported): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.maliciousValidator = event.params.validator;
  betEntity.reportDescription = event.params.description;
  betEntity.currentlyChallenged = true;
  betEntity.voteTime = event.params.voteTime;
  betEntity.reporter = event.params.reporter;

  betEntity.save();
}

export function handlesupportValidator(event: supportValidator): void {
  let betEntity = Bet.load(generateBetEntityId(event.params.betID));

  if (!betEntity) betEntity = new Bet(generateBetEntityId(event.params.betID));

  betEntity.support = event.params.support;

  betEntity.oppose = event.params.oppose;

  betEntity.save();
}

function generateBetEntityId(betId: BigInt): string {
  return "BetID" + betId.toString();
}
