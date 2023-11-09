import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { ShowAddTask } from 'src/app/shared/functions/addTask.functions';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddTaskComponent implements OnInit{
  addTaskForm!: FormGroup;
  constructor(public showAddTask: ShowAddTask){}

  ngOnInit() {
    this.addTaskForm = new FormGroup ({
      'title': new FormControl(null, Validators.required),
      'details': new FormControl(null, Validators.required),
      'date': new FormControl(null),
      'priority': new FormControl('Priority'),
      'status': new FormControl('To Do')
    });
  }

  onCreate(){
    this.addTaskForm.reset();  }

}