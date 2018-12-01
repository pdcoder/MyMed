import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { ErrorComponent } from './error/error.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {IndividualMedComponent} from "./individual-med/individual-med.component";
import { DocListComponent } from './doc-list/doc-list.component';
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'medicine/:id', component: IndividualMedComponent},
  {path: 'doclist', component: DocListComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'home', component: ProfileComponent},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
