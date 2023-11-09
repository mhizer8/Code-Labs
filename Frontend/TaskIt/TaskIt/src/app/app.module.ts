import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { AddTaskComponent } from './list/add-item/add-item.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { TasklistComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteItemComponent } from './list/delete-item/delete-item.component';
import { EditItemComponent } from './list/edit-item/edit-item.component';
import { KanbanComponent } from './dash/kanban/kanban.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashComponent } from './dash/dash.component';
import { AuthComponent } from './shared/auth/auth.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SharedComponent,
    AddTaskComponent,
    TasklistComponent,
    DeleteItemComponent,
    EditItemComponent,
    KanbanComponent,
    LandingPageComponent,
    DashComponent,
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }