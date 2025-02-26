import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todo',
  imports: [],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {
  listTodo: Todo[] = []
  constructor(private todoService: TodoService){
    this.listTodo = this.todoService.getAllTodoItems()
  }
}
