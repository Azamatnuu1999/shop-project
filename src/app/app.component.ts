import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { MessageSectionComponent } from './sections/message-section/message-section.component';
import { NavbarSectionComponent } from './sections/navbar-section/navbar-section.component';
import { OurPartnersSectionComponent } from './sections/our-partners-section/our-partners-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarSectionComponent,
    RouterOutlet,
    MessageSectionComponent,
    OurPartnersSectionComponent,
    FooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-project';
  
}
