import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router,private authService: AuthService ) {}

  isActive(url: string): boolean {
    return this.router.url.toLowerCase().includes(url.toLowerCase());
  }

  logout() {
    this.authService.logout();
  
  
  }
}
