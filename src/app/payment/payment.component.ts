import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

products =[1,1,1];

constructor(private router:Router) {
  
}

navigateTo(){
  this.router.navigate(['/account/orders'])
}
}
