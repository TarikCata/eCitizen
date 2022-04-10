import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalSignatureComponent } from './digital-signature/digital-signature.component';
import { DocumentCertificationComponent } from './document-certification/document-certification.component';
import { DocumentOrderComponent } from './document-order/document-order.component';
import { DocumentsComponent } from './documents/documents.component';
import { DrivingLicenceInfoComponent } from './driving-licence-info/driving-licence-info.component';
import { ECountryComponent } from './e-country/e-country.component';
import { HealthInfoComponent } from './health-info/health-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IdCardInfoComponent } from './id-card-info/id-card-info.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PassportComponent } from './passport/passport.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { VisaInfoComponent } from './visa-info/visa-info.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'log-in',
    component:LoginFormComponent
  },
  {
      path:'eCitizen/:username',
      component:ECountryComponent
  },
  {
      path:'eCitizen/:username/documents/id-card',
      component:IdCardInfoComponent
  },
  {
    path:'eCitizen/:username/documents/driving-licence',
    component:DrivingLicenceInfoComponent
  },
  {
    path:'eCitizen/:username/documents/health-card',
    component:HealthInfoComponent
  },
  {
    path:'eCitizen/:username/documents/passport',
    component:PassportComponent
  },
  {
    path:'eCitizen/:username/documents',
    component:DocumentsComponent
  },
  {
    path:'eCitizen/:username/documents-order',
    component:DocumentOrderComponent
  },
  {
    path:'eCitizen/:username/digital-signature',
    component:DigitalSignatureComponent
  },
  {
    path:'eCitizen/:username/get-visa',
    component:VisaInfoComponent
  },
  {
    path:'eCitizen/:username/documents-certification',
    component:DocumentCertificationComponent
  },
  {
    path:'eCitizen/:username/documents-order/shipping-form',
    component:ShippingFormComponent
  },
  {
    path:'eCitizen/:username/:component/qr-code',
    component:QrCodeComponent
  },
  {
    path:'eCitizen/:username/profile-details',
    component:ProfileDetailsComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
  {
    path:'404',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
