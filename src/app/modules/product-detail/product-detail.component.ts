import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardModel } from '../../core/interfaces/card.model';
import { CurrencyPipe } from '../../core/pipes/currency.pipe';
import { CardService } from '../../core/services/card.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../core/services/destroy.service';
import { CardComponent } from '../../components/card/card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MesssageService } from '../../core/services/message.service';
import { PhoneNumberPipe } from '../../core/pipes/phone.pipe';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html',
    imports: [NgFor, CurrencyPipe, RouterLink, CardComponent, ReactiveFormsModule, NgxMaskDirective, TranslateModule, PhoneNumberPipe],
    providers: [CardService, DestroyService, DatePipe, PhoneNumberPipe, provideNgxMask()],
    standalone: true
})

export class ProductDetailComponent implements OnInit {
    private $messageService = inject(MesssageService);
    private datePipe = inject(DatePipe);

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

    private router = inject(Router);
    private fb = inject(FormBuilder);
    private route = inject(ActivatedRoute);
    private destoyer = inject(DestroyService);
    private $productService = inject(CardService);
    private phoneNumberPipe = inject(PhoneNumberPipe);
    
    ngOnInit(): void {
        const productId = this.route.snapshot.params['id'];
        this.getProductData(productId);
    }

    form: FormGroup = this.fb.group({
        fullName: ['', Validators.required],
        mobilePhone: ['', [Validators.required, Validators.minLength(9)]]
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

    onSendData(data: CardModel) {
        this.isSendClicked = true;
        if(this.form.invalid) {
          this.updateValueAndValidity();
        } else {
            const message = 
            `
            %0A1. *Маҳсулот рақами* - ${data.id};
            %0A2. *Маҳсулот номи* - ${data.name};
            %0A3. *Исм Фамилия:* ${this.form.get('fullName')?.value};
            %0A4. *Телефон рақами:* ${this.phoneNumberPipe.transform(this.form.get('mobilePhone')?.value)};
            %0A5. *Буюртма вақти:* ${this.datePipe.transform(new Date() , 'HH:mm:ss yyyy/MM/dd')};
            %0A5. *Маҳсулот манзили:* ${this.router['location']._platformLocation.location.origin};
            `
            // Send message to telegram group
            this.$messageService
            .sendMessage(message)
            .pipe(takeUntil(this.destoyer))
            .subscribe((data) => {
              this.isSendClicked = false;
              this.form.reset();
          });
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