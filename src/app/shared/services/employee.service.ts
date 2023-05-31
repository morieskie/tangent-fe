import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

interface EmployeeCollectionResponse {
  current_page: string;
  data: EmployeeModel[];
  first_page_url: string;
  from: string;
  last_page: string;
  last_page_url: string;
  links: string;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: string;
  to: string;
  total: string;
}

interface Param {
  query?: string
  date_of_birth?: string
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://3.88.191.199/api';

  constructor(private http: HttpClient) {}

  getCollection(params: Param): Observable<{data:EmployeeModel[], total: string}> {
    return this.http.get<EmployeeCollectionResponse>(
      `${this.baseUrl}/employees`, {
        params: {
          ...params
        }
      }
    ).pipe(map((item:EmployeeCollectionResponse) => ({data:item.data, total: item.total})));
  }

  create(data: EmployeeModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees`, data);
  }

  read(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees/${id}`);
  }

  update(id: string, data: EmployeeModel): Observable<any> {
    return this.http.put(`${this.baseUrl}/employees/${id}`, data);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employees/${id}`);
  }
}
