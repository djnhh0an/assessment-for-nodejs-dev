import { ICard } from "../card/card.interface";

export interface IDeck {
  shuffle(): void;
  drawFirstFiveCards(): ICard[];
}
