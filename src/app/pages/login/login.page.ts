import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,

  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
    this.setupTabClickListeners();
  }
  private setupTabClickListeners() {
    const signUpTab = document.querySelector('label[for="tab-2"]');
    if (signUpTab) {
      signUpTab.addEventListener('click', () => this.register());
    }
  }
  async register() {
    const alert = await this.alertController.create({
      header: 'Sign Up',
      message: 'Do you Have Inflammatory Bowel Disease (IBD)?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navigateToRegister();
          }
        },
        {
          text: 'No',
          handler: () => {
            this.showNotEligibleAlert();
          }
        }
      ]
    });

    await alert.present();
  }
  async showNotEligibleAlert() {
    const alert = await this.alertController.create({
      header: 'Thank you for your interest in our platform.',
      message: 'This website is specifically designed to support individuals with Inflammatory Bowel Disease (IBD). Since you have indicated that you do not have IBD, you will not be able to create an account. If you are a caregiver or seeking more information about IBD, please visit our public resources section here. We appreciate your understanding.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
      ]
    });

    await alert.present();
  }
  navigateToRegister() {

    this.router.navigate(['register']);
  }
}
