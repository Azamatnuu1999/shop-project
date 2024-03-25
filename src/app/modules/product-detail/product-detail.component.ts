import { NgFor } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModel } from '../../core/interfaces/card.model';
import { CurrencyPipe } from '../../core/pipes/currency.pipe';

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html',
    imports: [NgFor, CurrencyPipe],
    standalone: true
})

export class ProductDetailComponent implements OnInit {
    @Input('data') data!: CardModel;

    private route = inject(ActivatedRoute);
    
    urls: string[] = [
        'assets/img/cards/card-1.png',
        'assets/img/cards/card-2.png',
        'assets/img/cards/card-3.png',
        'assets/img/cards/card-4.png'
    ]
    mainUrl: string = this.urls[0];

    ngOnInit(): void {
        this.route.params;
        this.data = {
            "id": "0",
            "name": "Cozy studio in Los Angeles",
            "price": 1200000,
            "discount": 10,
            "details": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam accusamus odit nesciunt autem cum optio ab omnis, quis praesentium molestiae labore beatae velit, quas ullam repellat. Tempora vero delectus reprehenderit rem, obcaecati omnis, dolorem corrupti dignissimos, eaque quam pariatur sunt voluptatum cum suscipit voluptas doloremque harum beatae soluta. Iste, at. Officia libero recusandae, ea impedit molestias aspernatur perspiciatis cumque quod, est odit provident alias magnam explicabo cum. Officiis obcaecati corrupti, ipsam reiciendis, possimus explicabo dolores harum alias animi, nostrum unde praesentium repellat neque illum reprehenderit! Quidem omnis fuga beatae, dolorem optio consequuntur maxime, eveniet sequi cumque, ab libero magni laborum.",
            "imgSrc": ["assets/img/cards/card-1.png", "assets/img/cards/card-2.png", "assets/img/cards/card-3.png"]
        }
    }

    onChangePhoto(url: string) {
        this.mainUrl = url;
    }

}