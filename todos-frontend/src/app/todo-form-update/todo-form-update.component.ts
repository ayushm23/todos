import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-todo-form-update',
  templateUrl: './todo-form-update.component.html',
  styleUrls: ['./todo-form-update.component.css']
})
export class TodoFormUpdateComponent {
  
  todo: Todo;
  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private todoService: TodoService) {
    this.todo = new Todo();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.todoService.findById(params['id']).subscribe((data) => {this.todo = data;});
    });
  }

  onSubmit() {
    this.todoService.update(this.todo).subscribe(() => this.gotoTodosList());
  }

  gotoTodosList() {
    this.router.navigate(['/get-all-todos']);
  }
}
