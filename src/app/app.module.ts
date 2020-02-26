import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CrudShellComponent } from './user-general/crud-shell.component';
import { UserListComponent } from './user-general/user-list/user-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserService } from './shared/services/user-service.service';
import { environment } from 'src/environments/environment';
import { UserEffects } from './state/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    UserModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx CRUD App',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [
    AppComponent,
    CrudShellComponent,
    UserListComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
