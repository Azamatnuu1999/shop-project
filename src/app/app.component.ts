import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { NavbarSectionComponent } from './sections/navbar-section/navbar-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { AboutSectionTwoComponent } from './sections/about-section-two/about-section-two.component';
import { ProductsSectionComponent } from './sections/products-section/products-section.component';
import { SliderSectionComponent } from './sections/slider-section/slider-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { MessageSectionComponent } from './sections/message-section/message-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarSectionComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    AboutSectionTwoComponent,
    ProductsSectionComponent,
    SliderSectionComponent,
    ContactSectionComponent,
    MessageSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shop-project';
  
}
