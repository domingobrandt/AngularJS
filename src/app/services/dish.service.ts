import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//import { delay } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/delay";
import 'rxjs/add/observable/of';



@Injectable({
  providedIn: 'root'
})
export class DishService {
 
  constructor() { }
  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(1000);
  }

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(1000);
  }

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(1000);
  }

  getDishIds(): Observable<number[] | any> {
    return Observable.of(DISHES.map(dish => dish.id ));
  }
}
