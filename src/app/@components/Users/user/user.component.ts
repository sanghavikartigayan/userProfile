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
  @Output() editUser = new EventEmitter<number>();
  @Output() deleteUser = new EventEmitter<User>();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onEditProfile(id: number) {
    this.editUser.emit(id);
  }
  onDeleteProfile(user: User) {
    this.deleteUser.emit(user);
  }
}
