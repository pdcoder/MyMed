import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    IndividualMedComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
