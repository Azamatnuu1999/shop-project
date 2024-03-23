import { Component, Input } from '@angular/core';
import { CardModel } from '../../core/interfaces/card.model';
import { NgIf } from '@angular/common';
import { CurrencyPipe } from '../../core/pipes/currency.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input('data') data!: CardModel;
}
