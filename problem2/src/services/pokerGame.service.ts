import { PlayingCard } from "../models/card/playingCard.model";
import { CardName, PokerHandType } from "../models/common/enum";
import { IDeck } from "../models/deck/deck.interface";
import { Deck } from "../models/deck/deck.model";
import { PokerGame } from "../models/game/pokerGame";
import { IPokerGameService } from "./pokerGameService.interface";

export class PokerGameService implements IPokerGameService {
  private pokerGame = new PokerGame();

  private ranked(cards: PlayingCard[]): PlayingCard[][] {
    // split cards by rank
    let result: PlayingCard[][] = [];

    for (let card of cards) {
      let r = this.pokerGame.rankSet.getRankValue(card);
      result[r] = result[r] || [];
      result[r].push(card);
    }

    // high to low
    result.reverse();

    // pairs and sets first
    result.sort((a, b) => {
      return a.length > b.length ? -1 : a.length < b.length ? 1 : 0;
    });

    console.log("Ranked cards", result);
    return result;
  }

  private isStraight(rankedCards: PlayingCard[][]): boolean {
    // must have 5 different cards
    if (!rankedCards[4]) {
      return false;
    }

    // could be wheel if r1 is 'ace' and r4 is '2'
    if (
      rankedCards[0][0].cardName === CardName.Ace &&
      rankedCards[1][0].cardName === CardName.Five &&
      rankedCards[4][0].cardName === CardName.Two
    ) {
      // hand is 'ace' '5' '4' '3' '2'
      rankedCards.push(rankedCards.shift() as PlayingCard[]);
      // ace is now low
      return true;
    }

    // run of five in row is straight
    let r1 = this.pokerGame.rankSet.getRankValue(rankedCards[0][0]);
    let r4 = this.pokerGame.rankSet.getRankValue(rankedCards[4][0]);
    return r1 - r4 === 4;
  }

  private isFlush(cards: PlayingCard[]): boolean {
    // all suits match is flush
    return cards.every((card: PlayingCard) => card.suit === cards[0].suit);
  }

  public determineHighestPokerHandType(cards: PlayingCard[]): PokerHandType {
    const rankedCards: PlayingCard[][] = this.ranked(cards);
    const isFlush = this.isFlush(cards);
    const isStraight = this.isStraight(rankedCards);
    const highestPlayedCards = rankedCards[0];
    if (
      isStraight &&
      isFlush &&
      highestPlayedCards[0].cardName === CardName.Ace
    ) {
      return PokerHandType.RoyalFlush;
    } else if (isStraight && isFlush) {
      return PokerHandType.StraightFlush;
    } else if (highestPlayedCards.length === 4) {
      return PokerHandType.FourOfAKind;
    } else if (rankedCards[0].length === 3 && rankedCards[1].length === 2) {
      return PokerHandType.FullHouse;
    } else if (isFlush) {
      return PokerHandType.Flush;
    } else if (isStraight) {
      return PokerHandType.Straight;
    } else if (highestPlayedCards.length === 3) {
      return PokerHandType.ThreeOfAKind;
    } else if (rankedCards[0].length === 2 && rankedCards[1].length === 2) {
      return PokerHandType.TwoPair;
    } else if (highestPlayedCards.length === 2) {
      return PokerHandType.OnePair;
    } else {
      return PokerHandType.HighCard;
    }
  }

  public createDeck(): IDeck {
    return new Deck(this.pokerGame.cards);
  }
}
