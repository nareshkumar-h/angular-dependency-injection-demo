import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTasks(){
    let tasks = ["Install Node", "Install Angular Cli"];
    return tasks;
  }


}
