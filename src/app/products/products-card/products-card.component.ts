import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit{
  @Input() products : any;
 // products: any[]=[];

  constructor(private productService: ProductService, private cartService: CartServiceService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
       
      },
      (error) => {
        // Handle error (e.g., show an error message)
        console.error('Error fetching products: ' + JSON.stringify(error));
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  


}
