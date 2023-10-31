import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResisterComponent } from './resister/resister.component';
import { ProductComponent } from './product/product.component';
import { AdminRoutingModule } from './/admin/admin-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'admin', loadChildren:()=>import("./admin/admin-routing.module").then(m=>AdminRoutingModule)},

  {
    path:'home',
    component: HomeComponent,
   
  },
  {
    path:'login', 
    component: LoginComponent

  },
  {
    path:'product',
    component: ProductComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'resister',
    component: ResisterComponent
  },
  {
    path:'productDetail',
    component: ProductDetailComponent
  },
  {
    path:'checkout', component:CheckoutComponent
  },
  {path:'payment',component:PaymentComponent},
  {path:'account/orders', component:OrderComponent},
  {path:'order/:id',component:OrderDetailComponent},
  {path: 'profile',component:ProfileComponent},


  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**', component:PagenotfoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
