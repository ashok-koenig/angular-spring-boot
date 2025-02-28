import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {
  id: number = 0

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe((employee)=>{
      if(employee){
        this.employeeFrom.patchValue({
                                      empName:employee.empName, 
                                      empEmail: employee.empEmail, 
                                      empSalary: String(employee.empSalary)
                                    })
      }
    })
  }

  employeeFrom = new FormGroup({
      empName: new FormControl('',[Validators.required]),
      empEmail: new FormControl('',[Validators.required, Validators.email]),
      empSalary: new FormControl('', [Validators.required, Validators.min(0)])
    })
  
    getFormControl(controlName: string): FormControl {
      return this.employeeFrom.get(controlName) as FormControl;
    }
    successMessage: string =''
    errorMessage: string =''
    handleSubmit(){
      this.successMessage = ''
      this.errorMessage = ''
      const {empName, empEmail, empSalary} = this.employeeFrom.value
      if(this.employeeFrom.valid && empName && empEmail && empSalary){      
        this.employeeService.updateEmployee({id: this.id, empName, empEmail, empSalary: Number(empSalary)})
                          .subscribe({
                            next: (data)=>{
                              if(data && data.id){                                
                                this.successMessage ="Employee updated"
                                alert(this.successMessage)
                                this.router.navigate(['/employees'])
                              }
                            },
                            error: (error)=>{
                              this.errorMessage = error
                            }
                          })
      }else{
        this.errorMessage = "Form is Invalid, Please check"
      }    
    }
}
