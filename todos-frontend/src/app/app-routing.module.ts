import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormAddComponent } from './todo-form-add/todo-form-add.component';
import { TodoFormGetComponent } from './todo-form-get/todo-form-get.component';
import { TodoFormUpdateComponent } from './todo-form-update/todo-form-update.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'get-all-todos', component: TodoListComponent },
  { path: 'add-todo', component: TodoFormAddComponent },
  { path: 'get-todo', component: TodoFormGetComponent },
  { path: 'update-todo/:id', component: TodoFormUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
