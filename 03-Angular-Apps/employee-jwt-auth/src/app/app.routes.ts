import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/employees', pathMatch: 'full'},
    {path:'employees', component: ListEmployeesComponent},
    {path:'employees/add', component: AddEmployeeComponent},
    {path:'employees/:id', component: EditEmployeeComponent},
    {path:'**', component: PageNotFoundComponent}
];
