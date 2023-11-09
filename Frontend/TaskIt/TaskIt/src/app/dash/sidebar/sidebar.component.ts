import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent  {
  @Output() featureSelected = new EventEmitter<string>();

  user = new User ("DamDoorbell", "mad.hizer@gmail.com", "../../assets/Images/penguin.jpg")


  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
