import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  isAuthenticated = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService){}
  loadedFeature = 'kanban'
  title = 'TaskIt';

  ngOnInit(): void {
    
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
