import { ICard } from "../card/card.interface";
import { IDeck } from "./deck.interface";
import { IShuffleService } from "../../services/shuffleService.interface";
import { ShuffleService } from "../../services/shuffle.service";

export class Deck implements IDeck {
  private cards: ICard[] = [];
  private shuffleService: IShuffleService = new ShuffleService();

  constructor(cards: ICard[] = []) {
    this.cards = cards;
  }

  public shuffle(): void {
    this.cards = this.shuffleService.shuffle(this.cards);
  }

  public drawFirstFiveCards(): ICard[] {
    return this.cards.slice(0, 5);
  }
}
