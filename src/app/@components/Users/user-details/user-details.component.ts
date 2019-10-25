import { Component, OnInit, Input } from '@angular/core';
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

  activeTab;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activeTab = 'personal';
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUserProfile(id)
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  toggleTab(activeTab: string) {
    this.activeTab = activeTab;
  }

}
