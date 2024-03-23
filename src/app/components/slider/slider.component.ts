import { DOCUMENT, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit{

  private document = inject(DOCUMENT);

  ngOnInit(): void {
    this.setSettings();
  }

  setSettings() {

    const slider = this.document.querySelector('#slider') as HTMLElement;
    const prevBtn = this.document.querySelector('.prev');
    const nextBtn = this.document.querySelector('.next');
    let currentPosition = 0;
    const step = slider.clientWidth / 3;
    const currCheck = step == 300 ? -600 : -1200;

    function moveSlider(direction:string) {
      if (direction === 'prev') {
        currentPosition + step > 0 ? currentPosition = currCheck : currentPosition += step;
      } else {
        currentPosition - step < currCheck ? currentPosition = 0 : currentPosition -= step;
      }
      if(slider) slider.style.left = currentPosition + 'px';
    }

    if(prevBtn) {
      prevBtn.addEventListener("click", () => {
          moveSlider('prev');
      })
    }

    if(nextBtn) {
      nextBtn.addEventListener("click", () => {
        moveSlider('next');
      })
    }

    // function autoSlide() {
    //   currentPosition - step < -1200 ? currentPosition = 0 : currentPosition -= step;
    //   if(slider) slider.style.left = currentPosition + 'px';
    //   setTimeout(() => {
    //     autoSlide();
    //   }, 3000);
    // }
    // autoSlide();
    
  }
  
}
