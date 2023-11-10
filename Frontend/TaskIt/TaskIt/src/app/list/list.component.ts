import { Component, OnInit} from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { AddTaskComponent } from './add-item/add-item.component';
import { ShowAddTask } from 'src/app/shared/functions/addTask.functions';
import { ShowEditTask } from 'src/app/shared/functions/editTask.function';
import { ShowDeleteTask } from 'src/app/shared/functions/deleteTask.function';
import { ActivatedRoute, Router} from '@angular/router';
import { TaskFunction } from '../shared/functions/taskfunctions.functions';

@Component({
  selector: 'app-tasklist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TasklistComponent implements OnInit {
  tasks = this.taskFunction.tasks;

constructor(public showAddTask: ShowAddTask, public showEditTask: ShowEditTask, public showDeleteTask: ShowDeleteTask, private router: Router, private route: ActivatedRoute, private taskFunction: TaskFunction){

}

ngOnInit(): void {

  }

}

