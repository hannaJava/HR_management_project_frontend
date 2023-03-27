import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {path:'departments', component: DepartmentListComponent},
  {path:'add-department', component: AddDepartmentComponent},
  {path:'', redirectTo:'add-department',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
