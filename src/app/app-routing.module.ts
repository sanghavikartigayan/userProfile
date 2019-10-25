import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './@components/Users/users.component';
import { UserDetailsComponent } from './@components/Users/user-details/user-details.component';


const routes: Routes = [
  {
    path: '', component: UsersComponent,
  },
  {
    path: 'user/:id', component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
