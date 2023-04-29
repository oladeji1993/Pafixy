import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranXactComponent } from './Pages/tran-xact/tran-xact.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { PayXComponent } from './Pages/pay-x/pay-x.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { PricingComponent } from './Pages/pricing/pricing.component';
import { DeveloperComponent } from './Pages/developer/developer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent,
    title: 'Home | Payfixy',
    data: {
      description:'Payfixy is a fintech company that offers innovative and secure payment solutions. With our user-friendly platform, you can easily send and receive payments from anywhere in the world. Join Payfixy today and experience hassle-free financial transactions'
    } 
  },
  {
    path: 'transact',
    component: TranXactComponent,
    title: "TranXact | Payfixy"

  },
  {
    path: 'payment',
    component: PaymentComponent,
    title: "Payment Gateway | Payfixy"
  },
  {
    path: 'payX',
    component: PayXComponent,
    title: "PayX | Payfixy"
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    title: "Contact | Payfixy"

  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: "About Us | Payfixy"

  },
  {
    path: 'developer',
    component: DeveloperComponent,
    title: "Developer | Payfixy"

  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: "Developer | Payfixy"

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
