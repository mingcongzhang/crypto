import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import { routerTransition } from '@app/core';
import {DashboardService} from "@app/analysis/dashboard/dashboard.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'anms-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [routerTransition]
})

export class DashboardComponent implements AfterViewInit {

  marketData: BittrexMarket[] = [];
  marketDataTableColumns = [
    'logourl',
    'marketcurrency',
    'basecurrency',
    'marketcurrencylong',
    'basecurrencylong',
    'mintradesize',
    'marketname',
    'isactive',
    //'created',
    'notice',
    //'issponsored'
  ];
  marketDataTableSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dashboardService: DashboardService) {}

  ngAfterViewInit() {
    if (this.marketData.length < 1) {
      this.dashboardService.retrieveMarkets().subscribe(
        data => {
          data.result.forEach(function(object){
            this.marketData.push({
              marketcurrency: object['MarketCurrency'],
              basecurrency: object['BaseCurrency'],
              marketcurrencylong: object['MarketCurrencyLong'],
              basecurrencylong: object['BaseCurrencyLong'],
              mintradesize: object['MinTradeSize'],
              marketname: object['MarketName'],
              isactive: object['IsActive'],
              //created: object['Created'],
              notice: object['Notice'],
              //issponsored: object['IsSponsored'],
              logourl: object['LogoUrl']
            });
          }, this);
          this.marketDataTableSource = new MatTableDataSource<BittrexMarket>(this.marketData);
          this.marketDataTableSource.paginator = this.paginator;
          this.marketDataTableSource.sort = this.sort;
        },
        err => {
          console.error(err);
        }
      )
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.marketDataTableSource.filter = filterValue;
  }

}

export interface BittrexMarket {
  marketcurrency: string;
  basecurrency: string;
  marketcurrencylong: string;
  basecurrencylong: string;
  mintradesize: number;
  marketname: string;
  isactive: boolean;
  //created: string;
  notice: string;
  //issponsored: string;
  logourl: string;
}
