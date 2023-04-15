import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit() {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }

  addOnClick() {
    this.router.navigate(['/add-todo']);
  }

  updateOnClick(id: number) {
    this.router.navigate(['/update-todo/'+id]);
  }

  deleteOnClick(id: number) {
    this.todoService.delete(id).subscribe(() => {this.ngOnInit();});
  }
}
