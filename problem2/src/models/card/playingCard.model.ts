import { CardName, Suit } from "../common/enum";
import { Card } from "./card.model";

export class PlayingCard extends Card {
  public suit: Suit;

  constructor(cardName: CardName, suit: Suit) {
    super(cardName);
    this.suit = suit;
  }
}
