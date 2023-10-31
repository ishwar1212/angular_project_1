import { Component, OnInit } from '@angular/core';
import { Mock_product_detail } from '../../Data/Mock_product_detail';
import { Router } from '@angular/router';
import { Apple_Mobile } from 'src/Data/apple';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  


  selectedSize:any;
  reviews=[1,1,1];
  relatedProducts:any;


  constructor(private router:Router) {
    
  }
  ngOnInit() {
    this.relatedProducts=Apple_Mobile;
  }

  hanadleAddToCart(){

    console.log(this.selectedSize);
    this.router.navigate(['cart'])

  }


}
