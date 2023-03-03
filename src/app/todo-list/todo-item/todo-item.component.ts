import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/mocked-data';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() itemToDelete: EventEmitter<TodoItem>  = new EventEmitter;


  deleteItem(): void {
    this.itemToDelete.emit(this.todoItem);
  }

}
