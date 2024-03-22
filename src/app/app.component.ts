import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarSectionComponent,
    HeroSectionComponent,
    AboutSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop-project';
  
}
