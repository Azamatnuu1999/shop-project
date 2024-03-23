import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [ TranslateModule, NgClass ],
  templateUrl: './navbar-section.component.html'
})
export class NavbarSectionComponent {
  public isMenuChecked: boolean = false;
  private translate = inject(TranslateService).setDefaultLang('uz_cyrl');

  onCheckboxChange() {
    this.isMenuChecked = !this.isMenuChecked;
  }
}
