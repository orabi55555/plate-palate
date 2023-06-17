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
user_name:any;
email:any;
gender:any;
address:any;
mobile:any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    let user = localStorage.getItem("user");
 console.log(user);
    if (user) {
      // parse the user object into a JavaScript object
      const userData = JSON.parse(user);

     
 
      this.user_name = userData.firstName + userData.lastName;
      this.email = userData.email;
      this.gender = userData.gender;
      this.address = userData.address;
      this.mobile = userData.mobile;

    
    }
  
}
}