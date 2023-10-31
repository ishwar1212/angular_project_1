import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

}
