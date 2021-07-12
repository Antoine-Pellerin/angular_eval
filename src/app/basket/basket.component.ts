import {Component} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Product} from '../model/product';
import {Customer} from '../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  basket: Product[] = [];

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerService.getBasket().subscribe(result => {
      this.basket = result;
    });
  }

  checkout(): void {
    this.customerService.checkout(this.customer).subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }

}
