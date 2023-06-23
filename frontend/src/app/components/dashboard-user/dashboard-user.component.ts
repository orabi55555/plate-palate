import { Component , OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit{
  users: any[] | undefined;
  name: any;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log("fn");
      console.log(this.users);
      console.log("fn");
    });


  }

  searchUserByName() {
    this.userService.searchUserByName(this.name)
      .subscribe(users => {
        this.users = users;
        console.log(users)
      });
  }




}



