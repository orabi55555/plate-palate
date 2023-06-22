import { Component, OnInit ,ElementRef  , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { OrderService } from "src/app/services/order.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
   validationCheckoutForm!: FormGroup;
  @ViewChild('successModal') successModal!: ElementRef;
  errorMessage: any;
  formattedInputValue!: string;
  formattedMonth: string = '';
  sectionVisible = false;
  total: number = 0;
  Items: any = [];
  flag : any;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) { }
    ngOnInit(){{
      // this.checkoutForm = this.formBuilder.group({
      //   name: ['', Validators.required],
      //   email: ['', [Validators.required, Validators.email]],
      //   address: ['', Validators.required],
      //   city: ['', Validators.required],
      //   state: ['', Validators.required],
      //   zip: ['', Validators.required],
      //   cardNumber: ['', Validators.required],
      //   expMonth: ['', Validators.required],
      //   expYear: ['', Validators.required],
      //   cvv: ['', Validators.required]
      // });
      // this.stripe = Stripe(environment.stripePublicKey);
      // this.cartService.getCart().subscribe(cart => {
      //   this.orderId = cart._id;
      //   this.amount = cart.totalPrice * 100;
      // });
    }
  }
  // onSubmit(): void {
  //   const name = this.checkoutForm.get('name').value;
  //   const email = this.checkoutForm.get('email').value;
  //   const address = this.checkoutForm.get('address').value;
  //   const city = this.checkoutForm.get('city').value;
  //   const state = this.checkoutForm.get('state').value;
  //   const zip = this.checkoutForm.get('zip').value;
  //   const cardNumber = this.checkoutForm.get('cardNumber').value;
  //   const expMonth = this.checkoutForm.get('expMonth').value;
  //   const expYear = this.checkoutForm.get('expYear').value;
  //   const cvv = this.checkoutForm.get('cvv').value;
  //   this.stripe.createToken(
  //     {
  //       name: name,
  //       address_line1: address,
  //       address_city: city,
  //       address_state: state,
  //       address_zip: zip,
  //       number: cardNumber,
  //       exp_month: expMonth,
  //       exp_year: expYear,
  //       cvc: cvv
  //     }
  //   ).then((result) => {
  //     if (result.error) {
  //       this.error = result.error.message;
  //     } else {
  //       const token = result.token;
  //       const paymentDetails = {
  //         amount: this.amount,
  //         token: token,
  //         orderId: this.orderId
  //       };
  //       this.cartService.processPayment(paymentDetails).subscribe(
  //         res => {
  //           console.log(res);
  //           this.router.navigate(['/orders']);
  //         },
  //         error => {
  //           console.error(error);
  //           this.error = error.message;
  //         }
  //       );
  //     }
  //   });
  // }
}
  


