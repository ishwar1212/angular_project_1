import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

// @Input() cart:any;

 // @Input() cart:any;
 cart : any[]=[];



 constructor(private cartService: CartServiceService, private router : Router) { }
 
 ngOnInit() {
   this.cartService.getCart().subscribe(
     (cart: any[]) => {
       this.cart = cart;
     }
   );
 }
 
 removeFromCart(index: number) {
   this.cartService.removeFromCart(index);
 }
 
 clearCart() {
   this.cartService.clearCart();
 }
 

  navigateToCheckout(){
    this.router.navigate(['/checkout']);
  }

 

  updateCartItem (num :Number){
    console.log("num",num)
  
  }
 
 

  

}

