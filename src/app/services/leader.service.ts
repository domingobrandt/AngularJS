import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";
//import { LEADERS } from "../shared/leaders";
import { Observable } from "rxjs/Observable";
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { map, catchError } from 'rxjs/operators';
import "rxjs/add/operator/delay";
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
    .pipe(catchError(this.processHTTPMsgService.handleError));
    
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true').pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
}
