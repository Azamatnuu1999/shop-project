import { DatePipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MesssageService } from '../../core/services/message.service';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../core/services/destroy.service';

@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, TranslateModule],
  providers: [DatePipe, DestroyService],
  templateUrl: './message-section.component.html'
})
export class MessageSectionComponent implements OnInit {
  private $messageService = inject(MesssageService);
  private datePipe = inject(DatePipe);
  private destroyer = inject(DestroyService);
  public isSendClicked = false;

  private fb = inject(FormBuilder);
  public form: FormGroup = this.fb.nonNullable.group({
    message: ['', Validators.required],
    fullName: ['', Validators.required],
    mobilePhone: ['', Validators.required]
  });

  ngOnInit() : void {

  }

  onSendMessage() {
    this.isSendClicked = true;
    if(this.form.invalid) {
      this.updateValueAndValidity();
    } else {
      const message = 
      `
      %0A *Шикоят ва таклифлар*
      %0A1. *Исм Фамилия:* ${this.form.get('fullName')?.value};
      %0A2. *Телефон рақами:* ${this.form.get('mobilePhone')?.value};
      %0A3. *Хабар мазмуни::* ${this.form.get('message')?.value};
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
