import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {
  @Input() view: 'grid' |'list'| 'currcartitem' | 'prevcartitem'= 'grid';

  constructor(private cartService: CartServiceService){}
  ngOnInit():void {

}
addtocart() {
  

}
}
