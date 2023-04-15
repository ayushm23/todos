import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form-add.component.html',
  styleUrls: ['./todo-form-add.component.css']
})
export class TodoFormAddComponent {

  todo: Todo;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private todoService: TodoService) {
    this.todo = new Todo();
  }

  onSubmit() {
    this.todoService.add(this.todo).subscribe(() => this.gotoTodoList());
  }

  gotoTodoList() {
    this.router.navigate(['/get-all-todos']);
  }

}
