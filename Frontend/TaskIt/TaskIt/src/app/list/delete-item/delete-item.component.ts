import { Component, OnInit } from '@angular/core';
import { ShowDeleteTask } from 'src/app/shared/functions/deleteTask.function';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor(public showDeleteTask: ShowDeleteTask){}

  ngOnInit(): void {
    
  }
}
