import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { UniversityStaffsListComponent } from './university-staffs-list/university-staffs-list.component';
import { UniversityStaffCreateComponent } from './university-staff-create/university-staff-create.component';
import { UniversityStaffUpdateComponent } from './university-staff-update/university-staff-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseUpdateComponent,
    CourseCreateComponent,
    UniversityStaffsListComponent,
    UniversityStaffCreateComponent,
    UniversityStaffUpdateComponent
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
