import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { KanbanComponent } from "./dash/kanban/kanban.component";
import { TasklistComponent } from "./list/list.component";
import { AddTaskComponent } from "./list/add-item/add-item.component";
import { EditItemComponent } from "./list/edit-item/edit-item.component";
import { DeleteItemComponent } from "./list/delete-item/delete-item.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { DashComponent } from "./dash/dash.component";
import { AuthComponent } from "./shared/auth/auth.component";
import { AuthGuard } from "./shared/auth/auth.guard";


const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LandingPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashComponent, canActivate:[AuthGuard], children:[ //need to find a way to redirect to task-list
    {path: 'list', component: TasklistComponent, children: [
        {path: 'new', component: AddTaskComponent},
        {path: ':id/edit', component: EditItemComponent},
        {path: ':id/delete', component: DeleteItemComponent}
      ] },
    {path: 'kanban', component: KanbanComponent},
]}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export  class AppRoutingModule {

}