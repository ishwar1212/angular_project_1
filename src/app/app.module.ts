import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule}from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { SuggestedproductComponent } from './suggestedproduct/suggestedproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResisterComponent } from './resister/resister.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './home/main-slider/main-slider.component';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { MatDividerModule} from '@angular/material/divider';
import { AdminModule } from './admin/admin.module';
import { ProductsCardComponent } from './products/products-card/products-card.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AddressFormComponent } from './checkout/address-form/address-form.component';
import { MatInputModule} from '@angular/material/input';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderTrackerComponent } from './order-tracker/order-tracker.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductReviewComponent } from './product-detail/product-review/product-review.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    SuggestedproductComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    FooterComponent,
    PagenotfoundComponent,
    ResisterComponent,
    MainSliderComponent,
    ProductSliderComponent,
    ProductCardComponent,
    ProductsCardComponent,
    CartItemComponent,
    CheckoutComponent,
    AddressCardComponent,
    AddressFormComponent,
    OrderComponent,
    OrderDetailComponent,
    OrderCardComponent,
    OrderTrackerComponent,
    PaymentSuccessComponent,
    PaymentComponent,
    ProductReviewComponent,
    StarRatingComponent,
    ProfileComponent


  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, 
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatCheckboxModule,
     MatRadioModule,
     MatProgressBarModule,
     AdminModule,
     BrowserAnimationsModule,
     MatInputModule,
     MatFormFieldModule,
     MatButtonModule,

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
