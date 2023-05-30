import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeeSkillModel } from '../models/employee-skill.model';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  // getCollection(params: Param): Observable<{data:EmployeeModel[], total: string}> {
  //   return this.http.get<EmployeeCollectionResponse>(
  //     `${this.baseUrl}/employees`, {
  //       params: {
  //         ...params
  //       }
  //     }
  //   ).pipe(map((item:EmployeeCollectionResponse) => ({data:item.data, total: item.total})));
  // }

  create(employeeId:string,data: SkillModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees/${employeeId}/skills`, {
      skill: data.name,
      years: data.years,
      level: data.level
    });
  }

  read(employeeId: string,id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees/${employeeId}/skills/${id}`);
  }

  update(id: string, data: EmployeeSkillModel): Observable<any> {
    return this.http.put(`${this.baseUrl}/employees/${id}`, data);
  }

  remove(employeeId: string, id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employees/${employeeId}/skills/${id}`);
  }
}
