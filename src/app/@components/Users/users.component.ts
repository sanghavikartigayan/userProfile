import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';
import { UserService } from 'src/app/@shared/services/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  searchUser: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
    this.searchUser = new FormGroup({
      searchBy: new FormControl(''),
    });
  }

  onSearch(value) {
    console.log(value);
  }
}
