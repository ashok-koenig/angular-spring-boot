import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  imports: [StructuralDirectivesComponent, AttributeDirectivesComponent, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-demo-app';
}
