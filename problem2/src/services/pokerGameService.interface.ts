import { PlayingCard } from "../models/card/playingCard.model";
import { PokerHandType } from "../models/common/enum";
import { IDeck } from "../models/deck/deck.interface";

export interface IPokerGameService {
  createDeck(): IDeck;
  determineHighestPokerHandType(cards: PlayingCard[]): PokerHandType;
}
