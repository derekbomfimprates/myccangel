import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate-button',
  templateUrl: './donate-button.component.html',
  styleUrls: ['./donate-button.component.scss'],
})
export class DonateButtonComponent  implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}

  // Method to navigate to the donation page
  donation() {
    this.router.navigate(['/donation']);
  }

}
