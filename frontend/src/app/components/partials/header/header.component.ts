import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private AuthService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(userId!).subscribe((user) => {
        this.user = user;
        console.log(user);
      });
}
logout() {
  this.AuthService.logout();
}


}
