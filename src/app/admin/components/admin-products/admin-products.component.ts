import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

 
    itemId: any;
    item: any;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private itemService: ProductService
    ) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.itemId = +params['id']; 
        this.getItemDetails(this.itemId);
      });
    }
  
    getItemDetails(id: number): void {
      this.itemService.getItems().subscribe(item => {
        this.item = item;
      });
    }
  
    updateItem(): void {
      this.itemService.updateItem(this.itemId, this.item).subscribe(() => {
       // this.router.navigate(['/items']); 
      });
    }
  
    deleteItem() {
      this.itemService.deleteItem(this.itemId).subscribe(() => {
        console.log(this.deleteItem)
      //  this.router.navigate(['/items']);
      });
    }

    navigateTo(){
      this.router.navigate(['/update-product']);
    }
  }
  
 
