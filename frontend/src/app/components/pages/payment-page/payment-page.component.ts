import { Component ,OnInit } from '@angular/core';
//import { StripeService } from 'stripe-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var paypal:any;
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{
  // paymentForm: FormGroup;

  // order:Order = new this.order();
 // constructor(private stripeService: StripeService) {}
  ngOnInit():void{
    // this.paymentForm = new FormGroup({
    //   amount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    //   currency: new FormControl('USD', Validators.required),
    //   cardNumber: new FormControl('', Validators.required),
    //   expMonth: new FormControl('', Validators.required),
    //   expYear: new FormControl('', Validators.required),
    //   cvc: new FormControl('', Validators.required),
    // });
  }
  onSubmit(): void {
    // if (this.paymentForm.valid) {
    //   const { amount, currency, cardNumber, expMonth, expYear, cvc } = this.paymentForm.value;
    //   this.stripeService
    //     .createToken({
    //       card: {
    //         number: cardNumber,
    //         exp_month: expMonth,
    //         exp_year: expYear,
    //         cvc: cvc,
    //       },
    //     })
    //     .subscribe((result) => {
    //       if (result.token) {
    //         this.stripeService
    //           .createCharge({
    //             amount: amount * 100,
    //             currency: currency,
    //             token: result.token,
    //           })
    //           .subscribe(
    //             () => {
    //               // Payment succeeded
    //             },
    //             (error) => {
    //               console.error(error);
    //               // Payment failed
    //             }
    //           );
    //       } else {
    //         console.error(result.error);
    //         // Payment failed
    //       }
    //     });
    // }
  }
}
  


