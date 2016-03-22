import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component ({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select #userPriority>
      <option value="| Low Priority" selected="selected">Low</option>
      <option value="| Normal Priority">Normal</option>
      <option value="| High Priority">High</option>
    </select>
    <button (click)="addTask(newDescription, userPriority)" class="btn-info btn-lg add-button">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement) {
    var values = [userDescription.value, userPriority.value];
    this.onSubmitNewTask.emit(values);
    console.log(values);
    userDescription.value = "";
    userPriority.value = "";
  }
}
