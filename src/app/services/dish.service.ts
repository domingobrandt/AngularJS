import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/delay";
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DishService {
 
  constructor(private http: HttpClient) { }


  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
