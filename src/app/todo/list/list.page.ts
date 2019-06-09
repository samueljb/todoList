import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  private todos: Observable<Todo[]>;
 
  constructor(private todoService: TodoService) { }
 
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
