import { Component, OnInit } from '@angular/core';
import { AboutSectionTwoComponent } from '../../sections/about-section-two/about-section-two.component';
import { AboutSectionComponent } from '../../sections/about-section/about-section.component';
import { ContactSectionComponent } from '../../sections/contact-section/contact-section.component';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { ProductsSectionComponent } from '../../sections/products-section/products-section.component';
import { SliderSectionComponent } from '../../sections/slider-section/slider-section.component';
import { AboutCompanySectionComponent } from '../../sections/about-company-section/about-company-section.component';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
    standalone: true,
    imports: [
        HeroSectionComponent,
        AboutSectionComponent,
        AboutSectionTwoComponent,
        ProductsSectionComponent,
        AboutCompanySectionComponent,
        SliderSectionComponent,
        ContactSectionComponent
    ]
})

export class MainPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}