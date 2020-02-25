import { reducer } from './state/user.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature('users', reducer)
  ],
  declarations: [],
})
export class AppModule { }
