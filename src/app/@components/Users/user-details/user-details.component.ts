import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/@shared/services/user-service.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  showUser = false;

  activeTab;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.activeTab = 'work';
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUserProfile(id)
      .subscribe((user: User) => {
        this.user = user;
        this.showUser = true;
      }, (err) => {
        this.showUser = false;
      });
  }

  toggleTab(activeTab: string) {
    this.activeTab = activeTab;
  }

  goBack() {
    this.route.navigateByUrl('/');
  }
}
