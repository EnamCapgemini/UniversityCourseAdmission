import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicant-update/applicant-update.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'applicant-create',component:ApplicantCreateComponent},
  {path:'applicant-list',component:ApplicantListComponent},
  {path:'applicant-update',component:ApplicantUpdateComponent},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
