import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { PasswordPopoverComponent } from '../../components/password-popover/password-popover.component'; // Correct the import path

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
  isPopoverOpen: boolean = false; // Flag to control popover visibility
  popoverEvent: Event | undefined;
  showPasswordInfo: boolean = false; // Flag to control password info visibility

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private popoverCtrl: PopoverController // Inject the PopoverController
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
        repeatPassword: formData.repeatPassword,
      });
    }
    this.generateYearsList(); // Generate the list of years when the component initializes
  }

  ngOnDestroy() {
    if (this.registerStateSubscription) {
      this.registerStateSubscription.unsubscribe();
    }
  }

  createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  generateYearsList() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
      this.years.push(i);
    }
  }

  nextStep() {
    if (this.isStepValid()) {
      this.currentStep++;
      this.checkPasswordInfo(); // Check if password info should be shown
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.checkPasswordInfo(); // Check if password info should be shown
    }
  }

  isStepValid(): boolean {
    // Check if the form fields are valid for the current step
    switch (this.currentStep) {
      case 1:
        return this.selectedFile !== undefined; // Ensuring the file is uploaded
      case 2:
        return !!this.registerForm.getForm().get('firstName')?.valid &&
               !!this.registerForm.getForm().get('lastName')?.valid &&
               !!this.registerForm.getForm().get('email')?.valid &&
               !!this.registerForm.getForm().get('password')?.valid &&
               !!this.registerForm.getForm().get('repeatPassword')?.valid &&
               !!this.registerForm.getForm().get('birthDate')?.valid;
      case 3:
        const addressGroup = this.registerForm.getForm().get('address') as FormGroup;
        return addressGroup.valid;
      // Add more cases as necessary for other steps
      default:
        return true;
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async register() {
    if (this.registerForm.getForm().valid && this.selectedFile) {
      // Perform the registration logic here, like sending the form data to the backend
      // For example:
      console.log('Registration successful:', this.registerForm.getForm().value);
      console.log('Selected file:', this.selectedFile);

      // After registration is successful, redirect to another page
      if (this.isStepValid()) {
        this.currentStep==13
      }
      this.router.navigate(['/home']);
    } else {
      // Handle the invalid form state
      console.error('Form is invalid');
    }
  }

  checkPasswordInfo() {
    // Show password info only when on step 2
    this.showPasswordInfo = this.currentStep === 2;
  }

  async presentPasswordPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PasswordPopoverComponent,
      event,
      translucent: true,
    });
    await popover.present();
    this.isPopoverOpen = true; // Set flag to true when popover is presented
  }

  // Add the method to handle popover dismissal if needed
  async onPopoverDismiss() {
    this.isPopoverOpen = false;
  }
}
