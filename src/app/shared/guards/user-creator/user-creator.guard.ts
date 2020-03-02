import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserCreatorComponent } from 'src/app/user-add/user-creator.component';

@Injectable({
  providedIn: 'root'
})
export class UserCreatorGuard implements CanDeactivate<UserCreatorComponent> {

  canDeactivate(component: UserCreatorComponent): boolean {
    if (component.userForm.dirty && component.userForm.touched && !component.userForm.valid) {
      return window.confirm('Do You wish to cancel creating new user?');
    }
    return true;
  }

}
