import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  employees: Employee[] = []

  constructor(private employeeService: EmployeeService){
    this.loadEmployees()
  }

  loadEmployees(){
    this.employeeService.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    })
  }

  handleDelete(id: number){
    const result = confirm('Are you sure, do you want to delete the employee?')
    if(result){
      this.employeeService.deleteEmployeeById(id).subscribe({
        next: () =>{
          this.loadEmployees()
        },
        error: (error) =>{
          console.log(error)
        }
      })
    }
  }
}
