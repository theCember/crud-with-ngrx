import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShellComponent } from './user-add/create-shell.component';
import { CrudShellComponent } from './user-general/crud-shell.component';
import { UserEditShellComponent } from './user-edit/user-edit-shell.component';

const routes: Routes = [
  { path: '', component: CrudShellComponent },
  { path: 'add', component: CreateShellComponent },
  { path: 'edit/:id', component: UserEditShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
