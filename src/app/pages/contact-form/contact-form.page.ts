import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  constructor(

  ) {}

  ngOnInit() {}



}
