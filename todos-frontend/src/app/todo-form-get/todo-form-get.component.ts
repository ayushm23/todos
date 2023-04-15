import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-todo-form-get',
  templateUrl: './todo-form-get.component.html',
  styleUrls: ['./todo-form-get.component.css']
})
export class TodoFormGetComponent {

  todo_id: number;
  todo: Todo | null;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private todoService: TodoService) {
    this.todo = null;
  }

  onSubmit() {
    this.todoService.findById(this.todo_id).subscribe((data) => {this.todo = data;});
  }

}
