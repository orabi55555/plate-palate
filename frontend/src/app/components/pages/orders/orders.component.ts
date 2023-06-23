import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { OrderService } from '../../../services/order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user: any;
  user_name:any;
    isLogged: boolean | undefined;
   
  orders: any[] | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private userService: UserService,
    private AuthService: AuthService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.isLogged = localStorage.getItem('accessToken') ? true : false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogged = !!localStorage.getItem('accessToken');
      }
    });
    let user = localStorage.getItem("user");
    console.log(user);
       if (user) {
         // parse the user object into a JavaScript object
         const userData = JSON.parse(user);
   
   
         this.user_name = userData.user_name;
       
   
   
       }
    // Call the getOrders method from the service
    this.orderService.getOrders().subscribe((orders) => {
      this.orders=orders;
      console.log(orders);
    });
  }
  logout() {
    this.AuthService.logout();
   
   
  }
}
