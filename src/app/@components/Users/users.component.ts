import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';
import { UserService } from 'src/app/@shared/services/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: any;
  searchUser: FormGroup;
  addNew = false;
  editUser = false;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
    this.searchUser = new FormGroup({
      searchBy: new FormControl(''),
    });
  }

  onSearch(value) {
    this.userService.getUserByName(value).subscribe((res) => {
      console.log(res);
    });
  }

  onAddNew(newUser) {
    const id = this.users[(this.users.length) - 1].id + 1;
    newUser.id = id;
    this.users.push(newUser);
  }

  onEditUser(user: User) {
    this.userService.editUser(user).subscribe((res) => {
      // this.route.navigateByUrl(`/${user.id}`);
      this.editUser = true;
      console.log('users component', res);
      this.user = res;
    });
  }

  onEdittedUser(user: User) {
    console.log('Back to main', user);
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(res => {
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
    });
  }

  onCancelEdit() {
    this.editUser = false;
  }
}
