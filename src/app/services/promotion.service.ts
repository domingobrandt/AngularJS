import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from "rxjs/Observable";
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import "rxjs/add/operator/delay";
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }
  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
   return this.http.get<Promotion>(baseURL + 'promotions?featured=true').pipe(map(leaders => leaders[0]));
  }
}