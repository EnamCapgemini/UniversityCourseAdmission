import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicant-update/applicant-update.component';
import { HomeComponent } from './home/home.component';
import { UniversityStaffCreateComponent } from './university-staff-create/university-staff-create.component';
import { UniversityStaffListComponent } from './university-staff-list/university-staff-list.component';
import { UniversityStaffUpdateComponent } from './university-staff-update/university-staff-update.component';

import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'applicant-create',component:ApplicantCreateComponent},
  {path:'applicant-list',component:ApplicantListComponent},
  {path:'applicant-update',component:ApplicantUpdateComponent},

  {path:'staff-create',component:UniversityStaffCreateComponent},
  {path:'staff-list',component:UniversityStaffListComponent},
  {path:'staff-update/:staffId',component:UniversityStaffUpdateComponent},
  {path:'login', component:LoginComponent},
  {path:'logout',component:LogoutComponent}
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
