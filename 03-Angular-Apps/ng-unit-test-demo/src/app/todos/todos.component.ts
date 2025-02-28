import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todoList: Todo[] =[]
  constructor(private todoService: TodoService){
    this.loadTodos()
  }

  loadTodos(){
    this.todoService.getTodos().subscribe((data)=>{
      this.todoList = data
    })
  }

}
