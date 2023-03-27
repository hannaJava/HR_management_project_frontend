import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private getAllUrl="http://localhost:8080/api/department/getAll";//"localhost:8080/api/department/getAll";
  private addUrl="http://localhost:8080/api/department/add";
  constructor(private httpClient:HttpClient) { }

  getDepartmentsList():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.getAllUrl);//(`${this.baseUrl}`);
  }

  addDepartment(department:Department):Observable<any>{
      return this.httpClient.post(this.addUrl,department);
  }
}
