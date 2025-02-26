import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  color: string = "green"
  myStyle = {
    // fontSize: '24px',
    'font-size': '24px',
    color: 'red'
  }
  isHighlight: boolean = false
  isEnhance: boolean = false

  toggleHighlight(){
    this.isHighlight = !this.isHighlight
    this.isEnhance = !this.isEnhance;
  }
}
