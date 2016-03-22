import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';

// Child component of AppComponent. Passed a set of tasks to display from AppComponent.
@Component({
  selector: 'task-list',
  inputs: ['taskList'], // 'taskList' array is used again below in directive.
  outputs: ['onTaskSelect'], // output to create custom event-emitter
  pipes: [DonePipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  templateUrl: 'app/task-list.view.html'
})

// Child component Controller of AppComponent with click event emitter.
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask 'child');
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string): void {
    this.taskList.push(
      new Task(description, this.taskList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
    // console.log(this.filterDone);
  }
}
