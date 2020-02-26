import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateShellComponent } from './user-add/create-shell.component';
import { CrudShellComponent } from './user-general/crud-shell.component';

const routes: Routes = [
  { path: '', component: CrudShellComponent },
  { path: 'add', component: CreateShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
