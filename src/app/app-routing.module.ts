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
import { AdmissionCommiteeMemberCreateComponent } from './admission-commitee-member-create/admission-commitee-member-create.component';
import { AdmissionCommiteeMemberListComponent } from './admission-commitee-member-list/admission-commitee-member-list.component';
import { AdmissionCommiteeMemberUpdateComponent } from './admission-commitee-member-update/admission-commitee-member-update.component';

import { AuthguardService } from './services/authguard.service';

import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },

  { path: 'applicant-create', component: ApplicantCreateComponent },
  { path: 'applicant-list', component: ApplicantListComponent },
  { path: 'applicant-update', component: ApplicantUpdateComponent, canActivate: [AuthguardService] },

  { path: 'staff-create', component: UniversityStaffCreateComponent },
  { path: 'staff-list', component: UniversityStaffListComponent },
  { path: 'staff-update/:staffId', component: UniversityStaffUpdateComponent },
  { path: 'staff-update', component: UniversityStaffUpdateComponent, canActivate: [AuthguardService] },

  { path: 'admission-commitee-member-create', component: AdmissionCommiteeMemberCreateComponent },
  { path: 'admission-commitee-member-list', component: AdmissionCommiteeMemberListComponent },
  { path: 'admission-commitee-member-update/:admissionCommiteeMemberId', component: AdmissionCommiteeMemberUpdateComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'logout', component: LogoutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
