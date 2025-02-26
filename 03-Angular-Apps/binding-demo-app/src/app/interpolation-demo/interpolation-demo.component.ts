import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  imports: [],
  templateUrl: './interpolation-demo.component.html',
  styleUrl: './interpolation-demo.component.css'
})
export class InterpolationDemoComponent {
  firstName: string = "John";
  lastName = "Smith"
  price: number = 5656
  quanity: number = 4
}
