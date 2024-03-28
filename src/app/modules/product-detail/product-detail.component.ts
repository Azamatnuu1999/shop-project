import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardModel } from '../../core/interfaces/card.model';
import { CurrencyPipe } from '../../core/pipes/currency.pipe';
import { CardService } from '../../core/services/card.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../core/services/destroy.service';
import { CardComponent } from '../../components/card/card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html',
    imports: [NgFor, CurrencyPipe, RouterLink, CardComponent, ReactiveFormsModule],
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
    public similarProducts!: CardModel[];
    public mainUrl!: string;
    public isSendClicked = false;

    private fb = inject(FormBuilder);
    private route = inject(ActivatedRoute);
    private destoyer = inject(DestroyService);
    private $productService = inject(CardService);
    
    ngOnInit(): void {
        const productId = this.route.snapshot.params['id'];
        this.getProductData(productId);
    }

    form: FormGroup = this.fb.group({
        fullName: ['', Validators.required],
        mobilePhone: ['', Validators.required]
    })

    onGetData(id: string) {
        this.getProductData(id);
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
            this.similarProducts = (data.cards as CardModel[]).filter(card => true);
            this.mainUrl = this.data.imgSrc[0];
        })
    }

    onSendData() {
        this.isSendClicked = true;
        if(this.form.invalid) {
          this.updateValueAndValidity();
        } else {
          this.isSendClicked = false;
          this.form.reset();
        }
    }
    
    updateValueAndValidity() {
        Object.values(this.form.controls).forEach((control) => {
          if(control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true })
          }
        })
        return
    }

}