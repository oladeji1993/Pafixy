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
  },
  {
    path: 'transact',
    component: TranXactComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'payX',
    component: PayXComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'developer',
    component: DeveloperComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
