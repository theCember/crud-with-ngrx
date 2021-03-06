import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserListShellComponent } from './user-general/user-list-shell.component';
import { UserListComponent } from './user-general/user-list/user-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserService } from './shared/services/user-service.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user.module';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ErrorBarComponent } from './shared/components/error-bar/error-bar.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorGuard } from './shared/guards/user-creator/user-creator.guard';
import { UserEditorGuard } from './shared/guards/user-editor/user-editor.guard';

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
    UserListShellComponent,
    UserListComponent,
    UserCreatorComponent,
    ErrorBarComponent,
    UserEditorComponent
  ],
  providers: [UserService, UserCreatorGuard, UserEditorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
