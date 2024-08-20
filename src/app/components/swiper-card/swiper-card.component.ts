import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss']
})
export class SwiperCardComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/homePageGreyBkg.png',
    'assets/images/chatBotGreyBackground.png',
    'assets/images/Navigator.gif'
  ];

  currentSlideIndex = 0;
  intervalId: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
  contactForm() {
    this.router.navigate(['contact-form']);
  }

  aboutUs() {
    this.router.navigate(['about-us']);
  }

  aboutIbd() {
    this.router.navigate(['about-ibd']);
  }

  home() {
    this.router.navigate(['home']);
  }

  aiHelp() {
    this.router.navigate(['ai-help']);
  }

  resources() {
    this.router.navigate(['resources']);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Slide every 3 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showSlide(index: number) {
    const slides = document.querySelector('.slides') as HTMLElement;
    const dots = document.querySelectorAll('.dot');

    // Adjust index for wrap-around
    if (index >= this.images.length) {
      this.currentSlideIndex = 0;
    } else if (index < 0) {
      this.currentSlideIndex = this.images.length - 1;
    } else {
      this.currentSlideIndex = index;
    }

    slides.style.transform = `translateX(${-100 * this.currentSlideIndex}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSlideIndex);
    });
  }

  nextSlide() {
    this.showSlide(this.currentSlideIndex + 1);
  }

  previousSlide() {
    this.showSlide(this.currentSlideIndex - 1);
  }

  goToSlide(index: number) {
    this.showSlide(index);
  }
}
