import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './@components/Users/users.component';
import { UserService } from './@shared/services/user-service.service';
import { UserComponent } from './@components/Users/user/user.component';
import { UserDetailsComponent } from './@components/Users/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './@components/Users/add-user/add-user.component';
import { EditUserComponent } from './@components/Users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
