import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUser: FormGroup;
  constructor() { }

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
    console.log(formValue);
  }
}
