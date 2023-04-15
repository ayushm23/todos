import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormAddComponent } from './todo-form-add.component';

describe('TodoFormComponent', () => {
  let component: TodoFormAddComponent;
  let fixture: ComponentFixture<TodoFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
