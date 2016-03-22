import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="task-form">
  <h3>Edit Description: </h3>
  <input [(ngModel)]="task.description" class="col-sm-8 input-lg"/>
  <select class="dropdown" [(ngModel)]="task.priority">
    <option value="| Low Priority" selected="selected">Low</option>
    <option value="| Normal Priority">Normal</option>
    <option value="| High Priority">High</option>
  </select>
  </div>
  `
})

export class EditTaskDetailsComponent {
  public task: Task;
}
