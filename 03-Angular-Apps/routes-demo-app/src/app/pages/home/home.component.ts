import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardNumber: string = ''
  errorMessage: string =''

  constructor(private router: Router){}

  handleClick(){
    this.errorMessage = ''
    if(this.cardNumber && this.cardNumber.length == 12){
      // Dynamically navigate to /payments if the condition is satisfied
      this.router.navigate(['/payments'])
    }else{
      // 
      this.errorMessage ="Please enter valid 12 digit card number"
    }
  }
}
