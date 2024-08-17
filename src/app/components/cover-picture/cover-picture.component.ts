import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-picture',
  templateUrl: './cover-picture.component.html',
  styleUrls: ['./cover-picture.component.scss'],
})
export class CoverPictureComponent implements OnInit {
  @Input() imageUrl: string = ''; // Input property to receive the image URL
  @Input() altText: string = 'Cover Image'; // Input property for alt text
  constructor(private router: Router) { }


  ngOnInit() {}

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
}
