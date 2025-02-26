import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  webUrl: string = "https://www.google.com/"
  picSrc: string = "images/pic1.jpg"
  picWidth: number = 400
  isDisabled: boolean = true
}
