import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

const BLOCKCHAIN_PROXY = '/API/blockchain';
const MARKET_CAP_URL = '/charts/market-cap';
const PATH_PARAM_OPTION = '?';
const PATH_PARAM_AND = '&';
const PATH_PARAM_TIMESPAN = 'timespan=';
const PATH_PARAM_JSON = 'format=json';

@Injectable()
export class PerformanceService {
  constructor(private httpClient: HttpClient) {}

  retrieveMarketCharts(timeSpan: string): Observable<any> {
    return this.httpClient
      .get(BLOCKCHAIN_PROXY + MARKET_CAP_URL + PATH_PARAM_OPTION + PATH_PARAM_TIMESPAN + timeSpan + PATH_PARAM_AND + PATH_PARAM_JSON, {})
      .pipe(
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
