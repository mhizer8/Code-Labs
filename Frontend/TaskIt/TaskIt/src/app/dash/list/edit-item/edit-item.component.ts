import { Component, OnInit } from '@angular/core';
import { ShowEditTask } from 'src/app/shared/functions/editTask.function';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{
  constructor(public showEditTask: ShowEditTask){}

  ngOnInit(): void {
    
  }

}
