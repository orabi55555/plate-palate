import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../../../services/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  paymentForm: FormGroup;
  amount: number = 0;
  orderId: string = '';
  isLoading: boolean = false;
  
  @ViewChild('successModal', { static: false }) successModal!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private modalService: NgbModal
  ) {
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expMonth: ['', [Validators.required]],
      expYear: ['', [Validators.required]],
      cvv: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    //this.amount = this.cartService.getTotalPrice();
    //this.orderId = this.cartService.getOrderId();
  }

  async onSubmit() {
    this.isLoading = true;
    const { name, cardNumber, expMonth, expYear, cvv } = this.paymentForm.value;

    const cardInfo = {
      name,
      cardN: cardNumber,
      cardM: expMonth,
      cardY: expYear,
      cardCVC: cvv
    };

    try {
      const response = await this.paymentService.processPayment(this.amount, cardInfo).toPromise();
      console.log(response);
      this.modalService.open(this.successModal); // use the open() method to display the modal
    } catch (error) {
      console.error(error);
    }
    this.isLoading = false;
  }
}
