import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    apiUrl= environment.apiBaseUrl+"/employees"
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl).pipe(catchError(this.handleError),retry(2));
  }

  createEmployee(newEmployee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, newEmployee).pipe(catchError(this.handleError))
  }

  deleteEmployeeById(id: number){
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError))
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError(()=> new Error('Something went wrong, please try again later.'))
  }
}
