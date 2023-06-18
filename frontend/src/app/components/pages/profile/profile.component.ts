import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
  
    this.userService.getUserById(userId!).subscribe((user) => {
        this.user = user;
        console.log(user);
      });
      
}
}