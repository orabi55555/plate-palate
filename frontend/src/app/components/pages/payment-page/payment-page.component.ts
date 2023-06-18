import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Order } from 'src/app/shared/models/Order';

const handlePayment = async()=>{
  const res =await fetch("/payment-page",{
    method :"POST",
    headers :{
      "content-type":"application/json"
    },
    body:JSON.stringify(CartItem)
  })
  const data = res.json()
  console.log(data);
}
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  
  order:Order = new Order();
  constructor(orderService: OrderService, router: Router) {
      // orderService.getNewOrderForCurrentUser().subscribe({
      //   next: (order) => {
      //     this.order = order;
      //   },
      //   error:() => {
      //     router.navigateByUrl('/chekcout');
      //   }
      // })

   }

  ngOnInit(): void {
  }

}
// import { Component ,OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { StripeService, Elements, Element as StripeElement, Elements Options } from "ngx-stripe"; import { DataService } from '../services/data.service';

// declare var paypal:any;
// @Component({
//   selector: 'app-payment-page',
//   templateUrl: './payment-page.component.html',
//   styleUrls: ['./payment-page.component.css']
// })
// export class PaymentPageComponent implements OnInit{
//   // order:Order = new this.order();\
//   elements: Elements;
//    card: StripeElement;
//     paymentStatus: any;
//      stripeData:any;
//      submitted:any;
//       loading: any;
//        elementsOptions: ElementsOptions = {locale: 'en'};
//        paymentHandler:any=null;
//       stripeForm: FormGroup;
// constructor(private fb: FormBuilder, private stripeService: StripeService, private dataService: DataService) { }

// ngOnInit() {
//   this.loading = false;
//   this.createForm();
//   this.stripeService.elements (this.elementsOptions)
//   .subscribe(elements => {
//   this.elements =elements;
//   if (!this.card) {
//   this.card=this.elements.create('card', {
//   iconStyle: 'solid',
//   style: {
//   base: {
//   iconColor: '#666EE8',
//   color: '#31325F',
//   lineHeight: '40px',
//   fontWeight: 300,
//   fontFamily: '"Helvetica Neue",Helvetica, sans-serif',
//   fontSize: '18px',
//   '::placeholder':{
//   color: '#CFD7E0'
//   }
//   }
//   },
//   });
//   this.card.mount ('#card-element');
// }
// });
// }
//   createForm(){
//   this.stripeForm =this.fb.group({
//   name: ['', [Validators.required]],
//   amount: ['', [Validators.required]]
//  });
//   }
//   buy() {
//     this.submitted = true;
//     this.loading = true;
//     this.stripeData = this.stripeForm.value
//     this.stripeService
//     .createToken (this.card, {name})
//     .subscribe(result => {
//     if (result.token) {
//     this.stripeData['token']=result.token
//     this.dataService.stripePayment(this.stripeData).subscribe((res)=>{
//        if (res ['success']){
//         this.loading = false;
//         this.submitted = false;
//          this.paymentStatus = res['status'];
//         }
    
//     else{
//     this.loading = false;
//     this.submitted = false;
//     this.paymentStatus = res ['status'];
//     }
//     })
//     } else if (result.error) {
//     this.paymentStatus = result.error.message
//     }
//     });
// }