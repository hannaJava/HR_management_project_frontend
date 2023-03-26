import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl="http://localhost:8080/api/department/getAll";//"localhost:8080/api/department/getAll";
  
  constructor(private httpClient:HttpClient) { }

  getDepartmentsList():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.baseUrl);//(`${this.baseUrl}`);
  }
}
