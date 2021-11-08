import { PlayingCard } from "./models/card/playingCard.model";
import { PokerHandType } from "./models/common/enum";
import { PokerGameService } from "./services/pokerGame.service";

console.log("START A NEW POKER GAME");
const pokerGame = new PokerGameService();

console.log("1. Create a new deck");
const deck = pokerGame.createDeck();

console.log("2. Shuffle the cards in deck");
deck.shuffle();

console.log("3. Draw first five cards from the shuffled deck");
const fistFiveCards = deck.drawFirstFiveCards() as PlayingCard[];
console.log("First five cards", fistFiveCards);

console.log("4. Determine the highest poker hand type from first five cards");
const result: PokerHandType = pokerGame.determineHighestPokerHandType(fistFiveCards);

console.log(
  "The highest poker hand is: ",
  PokerHandType[result].toString()
);
