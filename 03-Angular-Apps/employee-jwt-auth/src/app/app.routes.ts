import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

export const routes: Routes = [
    {path:'', redirectTo:'/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path:'employees', component: ListEmployeesComponent, canActivate:[authGuard], data: {roles: ['ADMIN', 'USER']}},
    {path:'employees/add', component: AddEmployeeComponent, canActivate:[authGuard], data: {roles: ['ADMIN']}},
    {path:'employees/:id', component: EditEmployeeComponent, canActivate:[authGuard], data: {roles: ['ADMIN']}},
    {path: 'unauthorized', component: UnauthorizedComponent},
    {path:'**', component: PageNotFoundComponent}
];
