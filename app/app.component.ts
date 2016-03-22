// Root component. Holds all models (data) for tasks.
import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

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
  public tasks: Task[]; // Task [] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app", "| High Priority", 0),
      new Task("Learn Kung Fu.", "| Low Priority", 1),
      new Task("Rewatch all the Lord of the Rings movies", "| Normal Priority", 2),
      new Task("Do the laundry", "| High Priority", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask, 'parent');
  }
}
