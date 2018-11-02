import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { ErrorComponent } from './error/error.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {IndividualMedComponent} from "./individual-med/individual-med.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'medicine/{id}', component: IndividualMedComponent},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
