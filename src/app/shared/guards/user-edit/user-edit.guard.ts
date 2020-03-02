import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from 'src/app/user-edit/user-edition/user-edit.component';

@Injectable({
  providedIn: 'root'
})
export class UserEditGuard implements CanDeactivate<UserEditComponent> {

  canDeactivate(component: UserEditComponent): boolean {
    if (component.editForm.dirty || component.editForm.touched) {
      return window.confirm('Do You wish to cancel editing current user?');
    }
    return true;
  }

}
