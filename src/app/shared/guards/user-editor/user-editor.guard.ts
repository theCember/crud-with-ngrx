import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditorComponent } from 'src/app/user-editor/user-editor.component';

@Injectable({
  providedIn: 'root'
})
export class UserEditorGuard implements CanDeactivate<UserEditorComponent> {

  canDeactivate(component: UserEditorComponent): boolean {
    if (component.editForm.dirty || component.editForm.touched) {
      return window.confirm('Do You wish to cancel editing current user?');
    }
    return true;
  }

}
