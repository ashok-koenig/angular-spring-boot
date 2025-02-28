import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Title';

  myForm = new FormGroup({
    num1: new FormControl('', Validators.required),
    num2: new FormControl('', Validators.required)
  })

  result: number = 0;

  handleSubmit(){
    if(this.myForm.valid){
      const number1 = Number(this.myForm.value.num1)
      const number2 = Number(this.myForm.value.num2)
      this.result = number1 + number2
    }
  }
}
