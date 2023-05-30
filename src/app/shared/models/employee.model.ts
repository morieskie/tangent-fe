import { EmployeeSkillModel } from './employee-skill.model'
import {SkillModel} from './skill.model'

export class EmployeeModel {
  public skills: SkillModel[] = [];
  constructor(
    public first_name: string,
    public last_name: string,
    public date_of_birth: string,
    public street: string,
    public city: string,
    public country: string,
    public postal_code: string,
    public email: string,
    public contact_number?: string,
    public id?: string,
    public code?: string,
  ) {}
}
