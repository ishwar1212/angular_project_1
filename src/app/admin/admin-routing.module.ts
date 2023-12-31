import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  
  {path:"", component:AdminComponent,children:[
    {path:"", component:DashboardComponent},
    {path:"products", component:AdminProductsComponent},
    {path:"orders", component:OrdersTableComponent},
    {path:"Customers", component:CustomersComponent},
    {path:"add-product", component:AddProductComponent},
    {path:"update-product", component:UpdateProductComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
