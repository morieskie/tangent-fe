import { SkillModel } from './skill.model';

export class EmployeeSkillModel {
  constructor(
    public years: number,
    public level: number,
    public skill?: SkillModel,
    public employee_id?: string,
    public skill_id?: string
  ) {}
}
