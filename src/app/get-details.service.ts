import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class GetDetailsService {
  //public stored_details: any;

  private detailsSource = new BehaviorSubject<string>("default");
  detailsMessage = this.detailsSource.asObservable();

  constructor(private _http: Http) { }

  getAllDetails() {
    return this._http.get('https://api.myjson.com/bins/3y28n').map((response: Response) =>
      response.json()
    );
  }
  changeDetails(details: any) {
    this.detailsSource.next(details)
  }
  // returnUserDetails() {
  //   console.log("From UtilityService", this.stored_details);
  //   return this.stored_details;
  // }
  // getUserDetails(data) {
  //   this.stored_details = data;
  // }

}

