import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/@shared/services/user-service.service';
import { User } from 'src/app/@shared/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() user: any;
  @Output() editedUser = new EventEmitter<any>();

  @Output() cancelEdit = new EventEmitter<boolean>();
  constructor(private userService: UserService) { }
  editUser: FormGroup;
  ngOnInit() {

    this.editUser = new FormGroup({
      name: new FormControl(this.user.name),
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email, Validators.email),
      address: new FormGroup({
        street: new FormControl(this.user.address.street),
        suite: new FormControl(this.user.address.suite),
        city: new FormControl(this.user.address.city),
        zipcode: new FormControl(this.user.address.zipcode)
      }),
      phone: new FormControl(this.user.phone),
      website: new FormControl(this.user.website),
      company: new FormGroup({
        companyname: new FormControl(this.user.company.name),
        catchPhrase: new FormControl(this.user.company.catchPhrase),
        bs: new FormControl(this.user.company.bs)
      })
    });

  }

  onEdit(user) {
    this.userService.editUser(user).subscribe(res => {
      console.log(res);
      this.editedUser.emit(res);
    });
  }

  onCancel() {
    this.cancelEdit.emit(false);
  }

}
