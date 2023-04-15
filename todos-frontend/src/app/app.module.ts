import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormAddComponent } from './todo-form-add/todo-form-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo-service.service';
import { TodoFormGetComponent } from './todo-form-get/todo-form-get.component';
import { TodoFormUpdateComponent } from './todo-form-update/todo-form-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormAddComponent,
    TodoFormGetComponent,
    TodoFormUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
