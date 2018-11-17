import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AngularMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import {CarouselComponent } from './carousel/carousel.component';
import {HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {CardlistComponent } from './cardlist/cardlist.component';
import {ErrorComponent } from './error/error.component';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { IndividualMedComponent } from './individual-med/individual-med.component';
import {LoginService} from "./login.service";
import {AppErrorHandler} from "./app-error-handler";
import { DocListComponent } from './doc-list/doc-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    CardlistComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    IndividualMedComponent,
    DocListComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [LoginService, {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
