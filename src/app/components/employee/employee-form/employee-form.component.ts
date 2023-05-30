import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import * as moment from 'moment'
import {firstValueFrom} from 'rxjs'
import {EmployeeSkillModel} from 'src/app/shared/models/employee-skill.model'
import {EmployeeModel} from 'src/app/shared/models/employee.model'
import {SkillModel} from 'src/app/shared/models/skill.model'
import {EmployeeSkillService} from 'src/app/shared/services/employee-skill.service'
import {EmployeeService} from 'src/app/shared/services/employee.service'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  formModel: EmployeeModel = new EmployeeModel('', '', '', '', '', '', '', '')
  errors: any = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: EmployeeService,
    private employeeSkillService: EmployeeSkillService
  ) {}

  async ngOnInit(): Promise<void> {
    const {id} = await firstValueFrom(this.route.params)
    const employee = await firstValueFrom(this.service.read(id))
    const skills = employee.skills.map((s: any) => ({
      id: s.id,
      level: s.level,
      name: s.skill.name,
      years: s.years,
    }))
    Object.assign(this.formModel, {...employee, skills})
    console.log({id, employee: this.formModel})
  }

  async onSubmit() {
    try {
      console.log(this.formModel)
      let id = this.formModel.id
      const {
        first_name,
        last_name,
        contact_number,
        email,
        date_of_birth,
        street,
        city,
        postal_code,
        country,
      } = this.formModel

      const data = {
        first_name,
        last_name,
        contact_number,
        email,
        date_of_birth: moment(date_of_birth).format('YYYY-MM-D'),
        street,
        city,
        postal_code,
        country,
      } as EmployeeModel

      if (id) {
        const updateResponse = await firstValueFrom(
          this.service.update(id, data)
        )
      } else {
        const createResponse = await firstValueFrom(this.service.create(data))
        id = createResponse.id
      }

      if (this.formModel.skills.length > 0) {
        this.formModel.skills.forEach(
          async (skill) => {
            if(!skill.id){
              await firstValueFrom(
                this.employeeSkillService.create(String(id), skill)
              )
            }else {
              await firstValueFrom(
                this.employeeSkillService.update(String(id), skill)
              )
            }
          }
            
        )
      }
      this.router.navigate(['employees'])
    } catch (error: any) {
      console.log({error})
      this.errors = error.errors
    }
  }

  async onRemoved(index: Number) {
    const model = this.formModel.skills[+index]
    console.log({model})
    if(model)
    await firstValueFrom(
      this.employeeSkillService.remove(
        String(this.formModel.id),
        String(model.id)
      )
    )
    // console.log({response})
    // if (response)
      this.formModel.skills = this.formModel.skills.filter(
        (skill, idx) => idx !== index
      )
  }

  onAddSkill() {
    this.formModel.skills.push(new SkillModel(''))
  }

  onUpdated(event: any) {
    this.formModel.skills[event.index] = event.data
  }
}
