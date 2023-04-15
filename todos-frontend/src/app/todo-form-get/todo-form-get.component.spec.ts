import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormGetComponent } from './todo-form-get.component';

describe('TodoFormGetComponent', () => {
  let component: TodoFormGetComponent;
  let fixture: ComponentFixture<TodoFormGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
