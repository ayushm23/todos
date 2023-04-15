import { Injectable } from '@angular/core';
import { Todo } from './todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl: string;

  constructor(private http: HttpClient) {
    this.todoUrl = 'http://localhost:8080/todos';
  }

  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }

  public findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.todoUrl+'/'+id);
  }

  public add(todo: Todo) {
    return this.http.post<Todo>(this.todoUrl, todo);
  }

  public update(todo: Todo) {
    return this.http.put<Todo>(this.todoUrl, todo);
  }

  public delete(id: number) {
    return this.http.delete(this.todoUrl+'/'+id);
  }
}
