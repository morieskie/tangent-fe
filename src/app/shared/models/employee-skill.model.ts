import { SkillModel } from './skill.model';

export class EmployeeSkillModel {
  constructor(
    public years: Number,
    public level: Number,
    public skill?: SkillModel,
    public employee_id?: string,
    public skill_id?: string
  ) {}
}
