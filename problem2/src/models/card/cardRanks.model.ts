import { CardName } from "../common/enum";
import { ICard } from "./card.interface";
import { IRankSet } from "./rankSet.interface";

export class RankSet implements IRankSet {
  public rankSet: CardName[] = [
    CardName.Two,
    CardName.Three,
    CardName.Four,
    CardName.Five,
    CardName.Six,
    CardName.Seven,
    CardName.Eight,
    CardName.Nine,
    CardName.Ten,
    CardName.Jack,
    CardName.Queen,
    CardName.King,
    CardName.Ace,
  ];

  public getRankValue(card: ICard): number {
    return this.rankSet.indexOf(card.cardName);
  }
}
