import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../components/footer/footer.component';
import { SwiperCardComponent } from '../components/swiper-card/swiper-card.component';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { CoverPictureComponent } from '../components/cover-picture/cover-picture.component';
import { PasswordPopoverComponent } from '../components/password-popover/password-popover.component';


@NgModule({
  declarations: [
    FooterComponent,
    SwiperCardComponent,
    HeaderComponent,
    ButtonsComponent,
    ErrorMessageComponent,
    CoverPictureComponent,
    PasswordPopoverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [
    FooterComponent,
    SwiperCardComponent,
    HeaderComponent,
    ButtonsComponent,
    ErrorMessageComponent,
    CoverPictureComponent,
    PasswordPopoverComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}







