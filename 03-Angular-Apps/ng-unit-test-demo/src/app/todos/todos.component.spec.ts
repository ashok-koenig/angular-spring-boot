import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TodoService } from '../services/todo.service';

class MockTodoService {
  getTodos() {
    return of([{id: 1, title: 'Test title', completed: false}])
  }
}


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let mockService: MockTodoService;

  beforeEach(async () => {
    mockService = new MockTodoService()
    await TestBed.configureTestingModule({
      imports: [TodosComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {provide: TodoService, useValue: mockService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos on initialization', () => {
    expect(component.todoList.length).toBe(1)
    expect(component.todoList[0].title).toBe('Test title')
  });

});
