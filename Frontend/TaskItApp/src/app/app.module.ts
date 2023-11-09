import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { SharedComponent } from './shared/shared.component';
import { FunctionsComponent } from './shared/functions/functions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListOfTasksComponent } from './dashboard/list-of-tasks/list-of-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    FunctionsComponent,
    DashboardComponent,
    ListOfTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
