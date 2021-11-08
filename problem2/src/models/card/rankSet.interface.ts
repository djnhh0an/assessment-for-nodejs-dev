import { CardName } from "../common/enum";
import { ICard } from "./card.interface";

export interface IRankSet {
  rankSet: CardName[];
  getRankValue(card: ICard): number;
}
