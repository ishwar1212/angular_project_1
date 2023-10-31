import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: any = {
    name: '',
    price: 0,
    description: '',
    brand:''
  };

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
  }

  createProduct() {
    this.productService.createProduct(this.product).subscribe(
      (data: any) => {
        // Product creation successful, redirect to product list or product detail page
        this.router.navigate(['/products']);
      },
      (error) => {
        // Handle product creation error (e.g., show an error message)
        console.error('Error creating product: ' + JSON.stringify(error));
      }
    );
  }
}
