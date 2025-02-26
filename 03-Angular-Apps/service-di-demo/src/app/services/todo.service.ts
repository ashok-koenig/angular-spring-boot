import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = []
  constructor() { }

  addTodoItem(newItem: Todo){
    this.todoList.push(newItem)
  }
  getAllTodoItems(){
    return this.todoList;
  }
}
