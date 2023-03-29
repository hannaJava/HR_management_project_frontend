import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{

  department: Department = new Department;
  constructor(private departmentService: DepartmentService,
              private router: Router){ }
  ngOnInit():void{
  }
    displayDepartmentList(){
      this.router.navigate(['/departments'])
    }

  onSubmit(){
    console.log(this.department);
    this.addDepartment();
    this.displayDepartmentList();
  }

  addDepartment(){
    this.departmentService.addDepartment(this.department).subscribe(
      response=>{
        console.log(response)
      },
      error=>console.log(error) 
    );
  }
}
