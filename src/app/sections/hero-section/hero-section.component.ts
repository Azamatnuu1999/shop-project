import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {

}
