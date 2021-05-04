import { TestBed } from '@angular/core/testing';

import { CourseServerService } from './course-server.service';

describe('CourseServerService', () => {
  let service: CourseServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
