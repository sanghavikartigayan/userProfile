import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './@components/Users/users.component';
import { UserDetailsComponent } from './@components/Users/user-details/user-details.component';
import { AddUserComponent } from './@components/Users/add-user/add-user.component';
import { EditUserComponent } from './@components/Users/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '', component: UsersComponent,
  },
  {
    path: 'user/:id', component: UserDetailsComponent
  },
  {
    path: ':id', component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
