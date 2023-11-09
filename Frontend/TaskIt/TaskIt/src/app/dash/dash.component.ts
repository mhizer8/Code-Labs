import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute){}
  loadedFeature = 'kanban'
  title = 'TaskIt';

  ngOnInit(): void {
    
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
