import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(public authService: AuthService, private router: Router) {}
  title = 'frontend';


getuserrole() {
  return this.authService.getUserRole();
}
isauthenticated() {
  return this.authService.isAuthenticated();

}

getCurrentRoute(): string {
  let currentRoute: string = this.router.url;
  this.router.events
    .pipe(filter((event: any): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe({
      next: (event: NavigationEnd) => {
        currentRoute = event.url;
      }
    });
  if (currentRoute === '/dashboard' && !this.authService.isAdmin()) {
    // currentRoute = '/dashboard';
  }
  return currentRoute;
}

}

