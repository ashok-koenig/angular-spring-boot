import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService){    
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
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  handleSubmit(){
    this.successMessage = ''
    this.errorMessage = ''
    const {empName, empEmail, empSalary} = this.employeeFrom.value
    // if(this.employeeFrom.valid && empName && empEmail && empSalary){      
    //   this.employeeService.createEmployee({empName, empEmail, empSalary: Number(empSalary)})
    if(this.employeeFrom.valid && empName && empEmail && empSalary && this.selectedFile){      
      this.employeeService.createEmployee({empName, empEmail, empSalary: Number(empSalary)}, this.selectedFile)
                        .subscribe({
                          next: (data)=>{
                            if(data && data.id){
                              this.employeeFrom.reset();
                              this.successMessage ="Employee created"
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
