import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ECountryComponent } from './e-country/e-country.component';
import { DocumentsComponent } from './documents/documents.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomePageNavbarComponent } from './home-page-navbar/home-page-navbar.component';
import { DrivingLicenceInfoComponent } from './driving-licence-info/driving-licence-info.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { IdCardInfoComponent } from './id-card-info/id-card-info.component';
import { HealthInfoComponent } from './health-info/health-info.component';
import { VisaInfoComponent } from './visa-info/visa-info.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { DocumentCertificationComponent } from './document-certification/document-certification.component';
import { DocumentOrderComponent } from './document-order/document-order.component';
import { DigitalSignatureComponent } from './digital-signature/digital-signature.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeAboutProjectComponent } from './home-about-project/home-about-project.component';
import { HomeHowItHelpsComponent } from './home-how-it-helps/home-how-it-helps.component';
import { HomeProsAndConsComponent } from './home-pros-and-cons/home-pros-and-cons.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { PassportComponent } from './passport/passport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ECountryComponent,
    DocumentsComponent,
    SideMenuComponent,
    HomePageNavbarComponent,
    DrivingLicenceInfoComponent,
    LoginFormComponent,
    IdCardInfoComponent,
    HealthInfoComponent,
    VisaInfoComponent,
    ShippingFormComponent,
    DocumentCertificationComponent,
    DocumentOrderComponent,
    DigitalSignatureComponent,
    HomeAboutProjectComponent,
    HomeHowItHelpsComponent,
    HomeProsAndConsComponent,
    HomeTeamComponent,
    PassportComponent,
    PageNotFoundComponent,
    QrCodeComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
