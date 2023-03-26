import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  departments!: Department[];

  constructor(private departmentSevice:DepartmentService){ }

  ngOnInit():void{
    this.getDepartments();
  }

  private getDepartments(){
    this.departmentSevice.getDepartmentsList().subscribe(response=>{
      console.log(response);
      this.departments=response;
    }
      );
  }
}
