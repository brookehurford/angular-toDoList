import { Component } from 'angular2/core';
import { Task } from './task.model';

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
