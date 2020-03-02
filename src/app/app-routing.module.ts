import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorGuard } from './shared/guards/user-creator/user-creator.guard';
import { UserEditorGuard } from './shared/guards/user-editor/user-editor.guard';
import { UserListShellComponent } from './user-general/user-list-shell.component';

const routes: Routes = [
  { path: '', component: UserListShellComponent },
  { path: 'add', component: UserCreatorComponent, canDeactivate: [UserCreatorGuard] },
  { path: 'edit/:id', component: UserEditorComponent, canDeactivate: [UserEditorGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
