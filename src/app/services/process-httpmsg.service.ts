import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }
  public extractData(res: Response){
    let body = res.json();
    return body || {};
  }

}
