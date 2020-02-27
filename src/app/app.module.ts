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
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user.module';
import { CreateShellComponent } from './user-add/create-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ErrorBarComponent } from './shared/components/error-bar/error-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UserModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx CRUD App',
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CrudShellComponent,
    UserListComponent,
    CreateShellComponent,
    ErrorBarComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
