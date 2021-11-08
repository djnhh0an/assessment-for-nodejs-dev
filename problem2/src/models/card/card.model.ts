import { CardName } from '../common/enum';
import { ICard } from './card.interface';

export class Card implements ICard {
  public cardName: CardName;

  constructor (cardName: CardName) {
    this.cardName = cardName;
  }
}
