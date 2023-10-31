import { Component } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  
  orders=[1,1,1];

  steps=[
    {id:0,title:"PLACED",isCompleted:true},
    {id:1,title:"CONFIRMED",isCompleted:true},
    {id:3,title:"SHIPPED",isCompleted:false},
    {id:4,title:"DELIVERED",isCompleted:false},

  ]

}
