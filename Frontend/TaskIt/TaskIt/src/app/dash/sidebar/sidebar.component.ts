import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../shared/user.model';
import { AuthComponent } from 'src/app/shared/auth/auth.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated = false;
  authService: any;

  constructor(private authComponent: AuthComponent){}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  // user = new User ("DamDoorbell", "mad.hizer@gmail.com", "../../assets/Images/penguin.jpg")

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }
}
