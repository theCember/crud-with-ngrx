import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/user.reducer';
import { UserEffects } from './state/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects])
  ],
})
export class UserModule { }
