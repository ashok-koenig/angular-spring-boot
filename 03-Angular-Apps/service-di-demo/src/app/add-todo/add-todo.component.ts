import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent { 
  title: string = ''
  // Dependency injection using constructor()
  // constructor(private todoService: TodoService){}
  // Dependency Injection using inject() method
  private todoService: TodoService = inject(TodoService)

  handleAddTodo(){
    if(this.title){
      const newItem: Todo ={title: this.title, completed: false }
      this.todoService.addTodoItem(newItem)
      this.title =''
    }
  }
}
