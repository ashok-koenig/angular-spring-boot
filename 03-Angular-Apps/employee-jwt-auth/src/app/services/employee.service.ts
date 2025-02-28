import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employee } from '../models/employee';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl= environment.apiBaseUrl+"/api/employees"
  headers: HttpHeaders; 
constructor(private http: HttpClient, private tokenService: TokenService) {
  this.headers = new HttpHeaders({'Authorization': 'Bearer ' + this.tokenService.getToken()})
 }

getAllEmployees():Observable<Employee[]>{
  
  return this.http.get<Employee[]>(this.apiUrl, {headers: this.headers}).pipe(catchError(this.handleError),retry(2));
}

createEmployee(newEmployee: Employee, file: File):Observable<Employee>{
  const formData = new FormData();
  formData.append('employee', new Blob([JSON.stringify(newEmployee)], { type: 'application/json' }));
  formData.append('empPhoto', file);
  return this.http.post<Employee>(this.apiUrl, formData, {headers: this.headers}).pipe(catchError(this.handleError))
}

// createEmployee(newEmployee: Employee):Observable<Employee>{
 
//   return this.http.post<Employee>(this.apiUrl, newEmployee, {headers: this.headers}).pipe(catchError(this.handleError))
// }

deleteEmployeeById(id: number){
  return this.http.delete<any>(`${this.apiUrl}/${id}`, {headers: this.headers}).pipe(catchError(this.handleError))
}

getEmployeeById(id: number): Observable<Employee>{
  return this.http.get<Employee>(`${this.apiUrl}/${id}`, {headers: this.headers}).pipe(catchError(this.handleError))
}

updateEmployee(employee: Employee): Observable<Employee>{
  return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee, {headers: this.headers}).pipe(catchError(this.handleError))
}

private handleError(error: HttpErrorResponse){
  console.log(error);
  return throwError(()=> new Error('Something went wrong, please try again later.'))
}
}
