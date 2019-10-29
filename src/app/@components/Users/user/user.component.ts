import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';
import { UserService } from 'src/app/@shared/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  onEditProfile(user: User) {
    this.editUser.emit(user);
  }
  onDeleteProfile(user: User) {
    this.deleteUser.emit(user);
  }
}
