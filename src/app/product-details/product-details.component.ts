import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output()
  addToBasket = new EventEmitter<Product>();
    
  @Input()
  data: Product;
  products: Product[] = [];
  sortKey: keyof Product = 'title';
  total = 0;

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute, 
    private customerService: 
    CustomerService 
    ) { 
      this.route.params.subscribe((params: Params): void => {
        const id = String(params.id);
        productService.getProductsById(id).subscribe(data => {
          this.data = data;
          productService.getProducts().subscribe(products => {
            this.products = products;
          });
        });
      });
    }

  ngOnInit() {

  }

  addToBasketClick() {
    this.addToBasket.emit(this.data);
  }

  isTheLast() {
    return this.productService.isTheLast(this.data);
  }


  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }

  addProduct(product) {
    this.customerService.addProduct(product)
    this.productService.decreaseStock(product)
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

}
