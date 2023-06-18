import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
// import { LatLng } from "leaflet";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

   order!:Order;
  constructor(activatedRoute: ActivatedRoute,
             orderService:OrderService) {
    const params = activatedRoute.snapshot.params;
    // if(!params.orderId) return;

    //  orderService.trackOrderById(params.orderId).subscribe(order => {
    //     this.order = order;
    //   })

  }

   ngOnInit(): void {
   }

}
