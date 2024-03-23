import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-slider-section',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './slider-section.component.html'
})
export class SliderSectionComponent {
}
