import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: any;

  isLogged: boolean | undefined;
 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private AuthService: AuthService
    
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.isLogged = localStorage.getItem('accessToken') ? true : false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogged = !!localStorage.getItem('accessToken');
      }
    });
    
   
}

logout() {
  this.AuthService.logout();
 
 
}




}
