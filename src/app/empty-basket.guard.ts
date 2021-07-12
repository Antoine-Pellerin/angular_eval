import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CustomerService} from './services/customer.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmptyBasketGuard implements CanActivate {

  constructor(private customerService: CustomerService) {
  }

  canActivate(): Observable<boolean> {
    return this.customerService.getBasket().pipe(
      map(basket => basket.length > 0)
    );
  }

}
