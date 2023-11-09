import { Component, OnInit} from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { AddTaskComponent } from './add-item/add-item.component';
import { ShowAddTask } from 'src/app/shared/functions/addTask.functions';
import { ShowEditTask } from 'src/app/shared/functions/editTask.function';
import { ShowDeleteTask } from 'src/app/shared/functions/deleteTask.function';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TasklistComponent implements OnInit {
constructor(public showAddTask: ShowAddTask, public showEditTask: ShowEditTask, public showDeleteTask: ShowDeleteTask, private router: Router, private route: ActivatedRoute){

}

  tasks: Task[] = [
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),

  ];

  //Modal//

  ngOnInit(): void {

  }

}

