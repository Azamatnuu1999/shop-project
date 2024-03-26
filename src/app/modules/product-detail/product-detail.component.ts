import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel } from '../../core/interfaces/card.model';
import { CurrencyPipe } from '../../core/pipes/currency.pipe';
import { CardService } from '../../core/services/card.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../core/services/destroy.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html',
    imports: [NgFor, CurrencyPipe],
    providers: [CardService, DestroyService],
    standalone: true
})

export class ProductDetailComponent implements OnInit {
    public data: CardModel = {
        id: '',
        price: 0,
        discount: 0,
        name: '',
        details: '',
        imgSrc: ['']
    };
    public mainUrl!: string;

    private route = inject(ActivatedRoute);
    private destoyer = inject(DestroyService);
    private $productService = inject(CardService);
    

    ngOnInit(): void {
        const productId = this.route.snapshot.params['id'];
        this.getProductData(productId);
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }

    onChangePhoto(url: string) {
        this.mainUrl = url;
    }

    getProductData(id: string) {
        this.$productService
          .getCards()
          .pipe(takeUntil(this.destoyer))
          .subscribe((data) => {
            this.data = (data.cards as CardModel[]).filter(card => card.id == id)[0];
            this.mainUrl = this.data.imgSrc[0];
        })
    }

}