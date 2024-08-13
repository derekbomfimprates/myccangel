import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';

import { Subscription } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm!: RegisterPageForm;
  registerStateSubscription: Subscription | undefined;
  currentStep: number = 1;
  years: number[] = [];
  selectedFile: any;

  constructor(
    private formBuilder: FormBuilder,

    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['formData']) {
      const formData = navigation.extras.state['formData'];
      this.registerForm.getForm().patchValue({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        repeatPassword: formData.repeatPassword
      });
    }
    this.generateYearsList(); // Generate the list of years when component initializes

  }

  ngOnDestroy() {
    if (this.registerStateSubscription) {
      this.registerStateSubscription.unsubscribe();
    }
  }

  nextStep() {
    if (this.currentStep < 11) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  register() {
    this.registerForm.getForm().markAllAsTouched();
    if (this.registerForm.getForm().valid) {
      this.currentStep = 11; // Navigate to the last step

    }
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }





  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.registerForm.patchValue({
        medicalReport: file
      });
    }
  }

  private generateYearsList() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    this.years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  }
}
