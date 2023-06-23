import { Component ,OnInit} from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] | undefined;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    // Call the getOrders method from the service
    this.orderService.getOrders().subscribe((orders) => {
      this.orders=orders;
      console.log(orders);
    });
  }
}
