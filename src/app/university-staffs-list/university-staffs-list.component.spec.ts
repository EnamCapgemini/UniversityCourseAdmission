import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStaffsListComponent } from './university-staffs-list.component';

describe('UniversityStaffsListComponent', () => {
  let component: UniversityStaffsListComponent;
  let fixture: ComponentFixture<UniversityStaffsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityStaffsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityStaffsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
