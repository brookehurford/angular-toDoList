// Root component. Holds all models (data) for tasks.
import { Component, EventEmitter } from 'angular2/core';

// Child compontent of TaskListComponent.
@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
  <h3>{{ task.description}}</h3>
  `
})

export class TaskComponent {
  public task: Task;
}

// Child component of AppComponent. Passed a set of tasks to display from AppComponent.
@Component({
  selector: 'task-list',
  inputs: ['taskList'], // 'taskList' array is used again below in directive.
  outputs: ['onTaskSelect'], // output to create custom event-emitter
  directives: [TaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  `
})

// Child component constructor of AppComponent with click event emitter.
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask 'child');
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}

// View and Controller
@Component({
  selector: 'my-app',
  directives: [TaskListComponent], // Changed to pull in child component. Tag changed in template as well.
  template: `
  <div class="container">
    <h1>To-Do List</h1>
    <task-list [taskList]="tasks"(onTaskSelect)="taskWasSelected($event)"></task-list>
  </div>
  `
})

// Stores instances of Model in a component.
export class AppComponent {
  public task: Task[]; // Task [] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app", 0);
      new Task("Learn Kung Fu.", 1);
      new Task("Rewatch all the Lord of the Rings movies", 2);
      new Task("Do the laundry", 3);
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask 'parent');
  }
}

// Model
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){
  }
}
