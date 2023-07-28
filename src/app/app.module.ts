import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './Pages/developer/developer.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { TranXactComponent } from './Pages/tran-xact/tran-xact.component';
import { PayXComponent } from './Pages/pay-x/pay-x.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HeaderComponent } from './Pages/shared/header/header.component';
import { FooterComponent } from './Pages/shared/footer/footer.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CookieBannerComponent } from './Pages/cookie-banner/cookie-banner.component';
import { PreferenceModalComponent } from './Pages/cookie-banner/preference-modal/preference-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    PaymentComponent,
    PricingComponent,
    ContactUsComponent,
    TranXactComponent,
    PayXComponent,
    LandingComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    CookieBannerComponent,
    PreferenceModalComponent
  ],
  imports: [
    NzMenuModule,
    NzStepsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
