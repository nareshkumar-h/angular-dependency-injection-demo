import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection-demo';

  constructor(private todoService:TodoService){

  }

  tasks = [];

  loadTasks(){
    this.tasks = this.todoService.getTasks();
  }
}
