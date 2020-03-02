import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateShellComponent } from 'src/app/user-add/create-shell.component';

@Injectable({
  providedIn: 'root'
})
export class UserAddGuard implements CanDeactivate<CreateShellComponent> {

  canDeactivate(component: CreateShellComponent): boolean {
    if (component.userForm.dirty && component.userForm.touched && !component.userForm.valid) {
      return window.confirm('Do You wish to cancel creating new user?');
    }
    return true;
  }

}
