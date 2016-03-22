import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';

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
