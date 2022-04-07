import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  // mod: any = new Model();

  model = new Model();

  isDisplay = false;
  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items
    }
    else {
      return this.model.items.filter(item => item._action);
    }
  }
  addItem(value: any) {
    if (value != "") {
      this.model.items.push(new ToDoItem(value, false));
    }
  }
}
