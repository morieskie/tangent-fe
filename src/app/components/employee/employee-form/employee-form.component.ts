import {Component, OnInit} from '@angular/core'
import {EmployeeModel} from 'src/app/shared/models/employee.model'
import {SkillModel} from 'src/app/shared/models/skill.model'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formModel: EmployeeModel = new EmployeeModel('', '', '', '', '', '', '', '')

  skills: SkillModel[] = []
  // skillModel = new SkillModel('');

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formModel)
  }

  onRemoved(index: Number) {
    this.skills = this.skills.filter((skill,idx) => idx !== index);
  }

  onAddSkill(){
    this.skills.push(new SkillModel(''))
  }
}
