import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreatorComponent } from './user-add/user-creator.component';
import { CrudShellComponent } from './user-general/crud-shell.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorGuard } from './shared/guards/user-creator/user-creator.guard';
import { UserEditorGuard } from './shared/guards/user-editor/user-editor.guard';

const routes: Routes = [
  { path: '', component: CrudShellComponent },
  { path: 'add', component: UserCreatorComponent, canDeactivate: [UserCreatorGuard] },
  { path: 'edit/:id', component: UserEditorComponent, canDeactivate: [UserEditorGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
