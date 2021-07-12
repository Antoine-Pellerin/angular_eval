import {Injectable} from '@angular/core';

import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getBasket(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/basket');
  }

  addProduct(product: Product): void {
    this.http.post('http://localhost:8080/rest/basket', product)
      .subscribe(() => {
        console.log('Produit ajouté au panier');
      });
  }

  getTotal(): Observable<number> {
    return this.getBasket().pipe(
      map(basket => {
        return basket.reduce((previous, next) => previous + next.price, 0);
      })
    );
  }

  checkout(customer: Customer): Observable<any> {
    return this.http.post('http://localhost:8080/rest/basket/confirm', customer);
  }

}
