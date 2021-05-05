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
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseUpdateComponent } from './course-update/course-update.component';

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
  {path:'logout',component:LogoutComponent},
{path:'course-list',component:CourseListComponent},
{path:'course-create',component:CourseCreateComponent},
{path:'course-update',component:CourseUpdateComponent}

];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
