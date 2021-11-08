import { IShuffleService } from "./shuffleService.interface";
import { ICard } from "../models/card/card.interface";

export class ShuffleService implements IShuffleService {
  // Using the Durstenfeld shuffle algorithm
  public shuffle(cards: ICard[]): ICard[] {
    const length = cards.length;
    if (length < 2) {
      throw new Error("Not enough cards to shuffle");
    }
    for (let i = length; i; i--) {
      const n = Math.floor(Math.random() * i);
      [cards[i - 1], cards[n]] = [cards[n], cards[i - 1]];
    }
    return cards;
  }
}
