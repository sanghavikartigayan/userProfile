import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/@shared/services/user-service.service';
import { User } from 'src/app/@shared/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Output() newUser = new EventEmitter<User>();
  addUser: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.addUser = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        suite: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required)
      }),
      phone: new FormControl('', Validators.required),
      website: new FormControl(''),
      company: new FormGroup({
        name: new FormControl('', Validators.required),
        catchPhrase: new FormControl('')
      })
    });
  }

  onAdd(formValue) {
    this.userService.addUser(formValue).subscribe(res => console.log(res));
  }
}
