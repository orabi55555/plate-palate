// import { Component ,ElementRef  , Input, ViewChild} from '@angular/core';
// import { FormBuilder, FormGroup , Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import * as bootstrap from 'bootstrap';

// import { NgxSpinnerService } from 'ngx-spinner';
// import { CheckoutService } from "src/app/services/checkout.service";
// import { OrderService } from "src/app/services/order.service";
// import { CartService } from "src/app/services/cart.service";

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent{

//   validationCheckoutForm!: FormGroup;
//   @ViewChild('successModal') successModal!: ElementRef;
//   errorMessage: any;
//   formattedInputValue!: string;
//   formattedMonth: string = '';
//   sectionVisible = false;
//   total: number = 0;
//   Items: any = [];
//   flag : any;
//   cards:any=[];
//   card:any;
//  creditNumber :any;
//  creditMonth:any;
//   message:any;

//   constructor(private fb: FormBuilder,
//     private router: Router,
//     private spinner: NgxSpinnerService,
//     private checkoutService: CheckoutService,
//     private orderService: OrderService,
//     private cartService: CartService,
//   ) {
//     this.validationCheckoutForm = this.fb.group({
//       name: [
//       '',
//         [Validators.required,
//           Validators.pattern(/^[a-zA-Z\s]{3,30}$/)],
//       ],
//       creditNumber: [
//         '',
//         [Validators.required,
//           Validators.pattern(/^[0-9]{16}$/),
//           Validators.minLength(16),
//           Validators.maxLength(16)],
//       ],
//       creditMonth: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^(0?[1-9]|1[0-2])$/),
//           Validators.minLength(1),
//           Validators.maxLength(2)],
//       ],
//       creditYear: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^[0-9]{2}$/),
//           Validators.minLength(2),
//           Validators.maxLength(2),
//         ]
//       ],
//       creditCVC: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^[0-9]{3,4}$/),
//           Validators.minLength(3),
//           Validators.maxLength(4),
//         ]
//       ]
//     })
//   }
//   leave():void
//   {
//     this.message = <HTMLElement>document.getElementById('thank');
//         this.message.innerHTML = "thank you";
//   }
//   ngOnInit() {
//     this.total = this.checkoutService.total;
//     this.Items = this.checkoutService.cartItems;
//     this.flag = this.checkoutService.flag;
//     console.log(this.total, this.Items, this.flag);
//   }
//   get inputName() {
//     return this.validationCheckoutForm.get('name');
//   }
//  get inputCreditNumber() {
//     return this.validationCheckoutForm.get('creditNumber');
//   }
//   get inputCreditMonth() {
//     return this.validationCheckoutForm.get('creditMonth');
//   }
//   get inputCreditYear() {
//     return this.validationCheckoutForm.get('creditYear');
//   }
//   get inputCreditCVC() {
//     return this.validationCheckoutForm.get('creditCVC');
//   }

//   formatCreditNumber() {
//    this.creditNumber = this.validationCheckoutForm.get('creditNumber')?.value;
//     this.formattedInputValue = this.creditNumber.toString().replace(/\d{4}(?=.)/g, '$& ') ;
//   }

//   formatMonth() {
//    this.creditMonth = this.validationCheckoutForm.get('creditMonth')?.value;
//     if (this.creditMonth.length == 1) {
//       this.formattedMonth = '0' + this.creditMonth ;
//     }
//     else {
//       this.formattedMonth = this.creditMonth;
//     }
//   }


//   //  clearAllCart() {
//   //   let userId = JSON.parse(localStorage.getItem('access_token')!).UserId
//   //    this.cartService.removeItemFromCart(userId).subscribe({
//   //    next: (data: any) => {
//   //      this.spinner.hide();
//   //     this.showModal();
//   //      },
//   //    })
//   //  }

//   // order() {
//   //   console.log("Order")
//   //   let user = JSON.parse(localStorage.getItem('access_token')!).UserId;
//   //   this.orderService.makeOrder(user, this.total, this.Items)
//   //     .subscribe({
//   //       next: (data: any) => {
//   //         if (this.flag != "buyNow") {
//   //           this.orderService.orderSubject.next();
//   //           this.clearAllCart();
//   //         } else {
//   //           this.orderService.orderSubject.next();
//   //           this.spinner.hide();
//   //           this.showModal();
//   //         }
//   //       }
//   //   })
//   // }



//   submitCheckout(): void{
//     if (this.validationCheckoutForm.valid) {
//       const creditNumber = this.validationCheckoutForm.get('creditNumber')?.value;
//       const creditMonth = this.validationCheckoutForm.get('creditMonth')?.value;
//       const creditYear = this.validationCheckoutForm.get('creditYear')?.value;
//       const creditCVC = this.validationCheckoutForm.get('creditCVC')?.value;
//       this.card={creditNumber,creditMonth,creditYear,creditCVC};
//       console.log(this.card);
//       this.cards.push(this.card);
//       console.log(this.cards);

//       this.checkoutService.sendDataToStripe(creditNumber, creditMonth, creditYear, creditCVC).subscribe(
//         (data: any) => {
//           this.spinner.show();

//           // this.message=document.getElementById('thank')?.innerText("success");

//           // //this.order();
//         },
//         (error: any) => {
//           this.spinner.hide();
//           console.log(error);
//         }
//       );

//     }else{console.log("error");}
//   }

//   showModal(){
//     const modal = new bootstrap.Modal(this.successModal.nativeElement);
//     modal.show();
//   }
//   redirectToHome() {
//     this.router.navigate(['/']);
//   }



// }
