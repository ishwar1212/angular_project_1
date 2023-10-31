import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filters, singleFilter } from './filterData';
import { Apple_Mobile } from 'src/Data/apple';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  filterData: any;
  singleFilter: any;
  appleMobile:any;

  constructor(private activatedRoute : ActivatedRoute, private route : Router, public cartservice : CartServiceService ,
    private router : Router, private productService : ProductService){}


    products: any[]=[];

  
    ngOnInit() {
      this.filterData = filters;
      this.singleFilter = singleFilter;
      this.appleMobile = Apple_Mobile;
    


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
      this.cartservice.addToCart(product);
    }





  
handleMultipleSelectFilter(value:string, sectionId:string){
  const queryParams= {...this.activatedRoute.snapshot.queryParams};

  console.log("Filter" ,queryParams);

  const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];

  const valueIndex = filterValues.indexOf(value);
  if(valueIndex!=-1){
    filterValues.splice(valueIndex,1)
  }else{
    filterValues.push(value);
  }

  if(filterValues.length>0){
    queryParams[sectionId]=filterValues.join(",");
  }else{
    delete queryParams[sectionId];
  }

  this.router.navigate([],{queryParams})
}
  
handleSingleFilter(value:string, sectionId:string){
  const queryParams= {...this.activatedRoute.snapshot.queryParams};
  queryParams[sectionId]=value;

  this.router.navigate([],{queryParams});


}
    

  
}

   
  