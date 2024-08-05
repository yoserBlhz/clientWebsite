import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  @ViewChild('slider') slider!: ElementRef;
  tx = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  slideForward() {
    if (this.isBrowser && this.tx > -75) {
      this.tx -= 25;
      this.updateSlider();
    }
  }

  slideBackward() {
    if (this.isBrowser && this.tx < 0) {
      this.tx += 25;
      this.updateSlider();
    }
  }

  private updateSlider() {
    if (this.isBrowser) {
      const sliderElement = this.slider.nativeElement;
      sliderElement.style.transform = `translateX(${this.tx}%)`;
    }
  }

}
