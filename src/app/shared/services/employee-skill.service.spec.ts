import { TestBed } from '@angular/core/testing';

import { EmployeeSkillService } from './employee-skill.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeSkillService', () => {
  let service: EmployeeSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
    ]
    });
    service = TestBed.inject(EmployeeSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
