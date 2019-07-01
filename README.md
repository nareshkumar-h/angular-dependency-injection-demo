# Dependency Injection


#### Create a Service
```
ng g service todo
```
```
export class TodoService {

  constructor() { }

  getTasks(){
    let tasks = ["Install Node", "Install Angular Cli"];
    return tasks;
  }
}
```

#### Inject the Service object in Component
```
export class AppComponent {
  constructor(private todoService:TodoService){

  }
```

#### Call Service Method
```
export class AppComponent {

  tasks = [];
  constructor(private todoService: TodoService) {
  }

  loadTasks() {
    this.tasks = this.todoService.getTasks();
  }
}
```

#### Display Tasks
```
{{tasks|json}}
```

