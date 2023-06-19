import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
id:any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router // add Router dependency injection
  ) {}

  ngOnInit() {
    let user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
  
      this.user_name = userData.user_name;
      this.email = userData.email;
      this.gender = userData.gender;
      this.address = userData.address;
      this.mobile = userData.mobile;
  
      // set the user object to the parsed user data
      this.user = JSON.parse(user);
    }
  }
    onUpdateProfile() {
      this.router.navigate(['/update-user-profile', this.user._id]);
    }

//     onSaveChanges(): void {
//       this.router.UpdateUserById(this.user._id, this.user)
//         .subscribe((response) => {
//           if (response) {
//             //console.log(response);
//           } else {
//             console.log('Error updating user information');
//           }     
//         });

// }
}
