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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { HTTPService } from './shared/http/http.service';



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
    SignInComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient, AuthGuard, HTTPService, AuthService, 
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }