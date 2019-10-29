import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private route: Router) { }
  user: User;
  showUser = true;
  editUser: FormGroup;
  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUserProfile(id)
      .subscribe((user: User) => {
        this.showUser = true;
        this.user = user;
      }, (err) => {
        this.showUser = false;
        console.log(err);
      });

    this.editUser = new FormGroup({
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
        companyname: new FormControl('', Validators.required),
        catchPhrase: new FormControl(''),
        bs: new FormControl('')
      })
    });
  }

  goBack() {
    this.route.navigateByUrl('/');
  }
  onEdit(id, formValue) {
    this.userService.editUser(id, formValue).subscribe(res => {
      console.log(res);
    });
  }
}
