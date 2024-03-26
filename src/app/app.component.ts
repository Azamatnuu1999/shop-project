import { Component, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { MessageSectionComponent } from './sections/message-section/message-section.component';
import { NavbarSectionComponent } from './sections/navbar-section/navbar-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarSectionComponent,
    RouterOutlet,
    MessageSectionComponent,
    FooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-project';
  
}
