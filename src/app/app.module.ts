import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicant-update/applicant-update.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { UniversityStaffCreateComponent } from './university-staff-create/university-staff-create.component';
import { UniversityStaffUpdateComponent } from './university-staff-update/university-staff-update.component';
import { UniversityStaffListComponent } from './university-staff-list/university-staff-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseUpdateComponent,
    CourseCreateComponent,
    ApplicantCreateComponent,
    ApplicantListComponent,
    ApplicantUpdateComponent,
    HomeComponent,
    AboutusComponent,
    UniversityStaffCreateComponent,
    UniversityStaffUpdateComponent,
    UniversityStaffListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
