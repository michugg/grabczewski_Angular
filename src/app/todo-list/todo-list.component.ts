import { Component } from '@angular/core';
import { TodoItem, TODO_ITEM } from '../mocked-data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newItem: string = 'Nowy element';
  todoItems: TodoItem[] = TODO_ITEM;

  addItem(): void {
    //console.log('Przycisk zostal wcisniety',this.newItem);
    this.todoItems.push({ text: this.newItem, doneText:false });
    this.newItem='';
  }

  removeItem(event: TodoItem): void{
    this.todoItems=this.todoItems.filter(item=>item.text !== event.text);
  }

  sortItem(): void{
    this.todoItems=this.todoItems.sort((a, b) => {
      if (a.text.toLowerCase() < b.text.toLowerCase()) {
        return -1;
      } else if (a.text.toLowerCase() > b.text.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });

  }
  doneItem(item:TodoItem): void{
    item.doneText=!item.doneText;
  }
}
