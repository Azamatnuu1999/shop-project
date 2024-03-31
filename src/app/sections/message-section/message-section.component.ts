import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MesssageService } from '../../core/services/message.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../core/services/destroy.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { PhoneNumberPipe } from '../../core/pipes/phone.pipe';

@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, TranslateModule,  NgxMaskDirective, PhoneNumberPipe],
  providers: [DestroyService, PhoneNumberPipe, provideNgxMask()],
  templateUrl: './message-section.component.html'
})
export class MessageSectionComponent implements OnInit {
  private $messageService = inject(MesssageService);
  private phoneNumberPipe = inject(PhoneNumberPipe);
  private destroyer = inject(DestroyService);
  public isSendClicked = false;

  private fb = inject(FormBuilder);
  public form: FormGroup = this.fb.nonNullable.group({
    message: ['', Validators.required],
    fullName: ['', Validators.required],
    mobilePhone: ['', [Validators.required, Validators.minLength(9)]]
  });

  ngOnInit() : void {

  }

  onSendMessage() {
    this.isSendClicked = true;
    if(this.form.invalid) {
      console.log('error', this.form.get('mobilePhone'))
      this.updateValueAndValidity();
    } else {
      const message = 
      `
      %0A *Шикоят ва таклифлар*
      %0A1. *Исм Фамилия:* ${this.form.get('fullName')?.value};
      %0A2. *Телефон рақами:* ${this.phoneNumberPipe.transform(this.form.get('mobilePhone')?.value)};
      %0A3. *Хабар мазмуни:* ${this.form.get('message')?.value};
      `
      // Send message to telegram group
      this.$messageService
        .sendMessage(message)
        .pipe(takeUntil(this.destroyer))
        .subscribe(() => {
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
