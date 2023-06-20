import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router,private userService: UserService , private route : ActivatedRoute) {}

  isLogged: boolean | undefined;





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
  this.authService.logout();


}


}
