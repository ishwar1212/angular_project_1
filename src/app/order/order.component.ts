import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderFilter=[
    {value:"on_the_way",label:"on the way",},
    {value:"delivered",label:"Delivered",},
    {value:"cancelled",label:"Cancelled",},
    {value:"returened",label:"Returned",}


]

  orders=[[1,1],[1,1]]

  constructor(private router:Router){}

  navigateToOrderDetails=()=>{
    this.router.navigate(['/order/${id}'])
  }

}
