import {ComponentFixture, TestBed} from '@angular/core/testing'

import {EmployeeFormComponent} from './employee-form.component'

import {RouterTestingModule} from '@angular/router/testing'
import {HttpClientModule} from '@angular/common/http'
import {SharedModule} from 'src/app/shared/shared.module'
import {MatNativeDateModule} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent
  let fixture: ComponentFixture<EmployeeFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
    })
    fixture = TestBed.createComponent(EmployeeFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
