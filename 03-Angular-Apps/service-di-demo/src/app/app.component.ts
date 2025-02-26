import { Component } from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

@Component({
  selector: 'app-root',
  imports: [AddTodoComponent, ListTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-di-demo';
}
