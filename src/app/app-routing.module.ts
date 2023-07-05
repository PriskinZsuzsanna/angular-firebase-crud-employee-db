import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'login/:site', component: LoginComponent},
  {path: 'edit/:id', component: EditComponent },
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
