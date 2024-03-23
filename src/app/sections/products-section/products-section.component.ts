import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { CardService } from '../../core/services/card.service';
import { CardModel } from '../../core/interfaces/card.model';
import { DestroyService } from '../../core/services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CardComponent, NgFor],
  providers: [DestroyService],
  templateUrl: './products-section.component.html'
})
export class ProductsSectionComponent implements OnInit {
  private $cardService = inject(CardService);
  private destroyer = inject(DestroyService);

  public data: CardModel[] = [];

  ngOnInit(): void {
    this.getCardData();
  }

  getCardData() {
    this.$cardService.getCards().pipe(takeUntil(this.destroyer)).subscribe((data) => {
      this.data = data.cards;
    })
  }

}
