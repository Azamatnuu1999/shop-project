import { CommonModule, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {

}
