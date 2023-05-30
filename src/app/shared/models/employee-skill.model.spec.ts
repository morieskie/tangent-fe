import { EmployeeSkillModel } from './employee-skill.model';

describe('EmployeeSkillModel', () => {
  it('should create an instance', () => {
    expect(new EmployeeSkillModel(0,0)).toBeTruthy();
  });
});
