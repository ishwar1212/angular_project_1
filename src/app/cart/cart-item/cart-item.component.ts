import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  // @Input() cart:any;
//   cart : any[]=[];



// constructor(private cartService: CartServiceService, private router : Router) { }

// ngOnInit() {
//   this.cartService.getCart().subscribe(
//     (cart: any[]) => {
//       this.cart = cart;
//     }
//   );
// }

// removeFromCart(index: number) {
//   this.cartService.removeFromCart(index);
// }

// clearCart() {
//   this.cartService.clearCart();
// }

// navigateToCheckout(){
//   this.router.navigate(['/checkout']);
// }



  updateCartItem (num :Number){
    console.log("num",num)
  
  }
  


}
