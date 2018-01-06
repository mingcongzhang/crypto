import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

const BITTREX_API = '/API/bittrex';
const MARKET_URL = '/getmarkets';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  retrieveMarkets(): Observable<any> {
    return this.httpClient
      .get(BITTREX_API + MARKET_URL, {})
      .pipe(
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
