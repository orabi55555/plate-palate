import { Component ,OnInit } from '@angular/core';

declare var paypal:any;
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{
  // order:Order = new this.order();
  constructor(){}
  ngOnInit():void{

  }

}
