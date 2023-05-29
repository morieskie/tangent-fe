import {Component} from '@angular/core'
import {EmployeeModel} from 'src/app/shared/models/employee.model'
import {SkillModel} from 'src/app/shared/models/skill.model'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  formModel: EmployeeModel = new EmployeeModel('', '', '', '', '', '', '', '')

  skills: SkillModel[] = []
  skillModel = new SkillModel('');

  onSubmit() {
    console.log(this.formModel)
  }
}
