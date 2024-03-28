import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './message-section.component.html'
})
export class MessageSectionComponent implements OnInit {
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
