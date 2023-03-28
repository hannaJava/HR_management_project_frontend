import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  departments!: Department[];

  constructor(private departmentSevice:DepartmentService, 
    private router:Router){ }

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
  updateDepartment(id:number){
    this.router.navigate(['update-department',id]);
  }
  deleteDepartment(id:number){
    this.router.navigate(['delete-department',id]);
  }
}
