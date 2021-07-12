import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  sortKey: keyof Product = 'title';
  total = 0;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('welcomeMsg') public title: string
  ) {
    productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.updateTotal();
  }

  updatePrice(event: Product): void {
    this.customerService.addProduct(event);
    this.productService.decreaseStock(event);
    this.updateTotal();
  }

  updateTotal(): void {
    this.customerService.getTotal().subscribe(total => {
      this.total = total;
    });
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
