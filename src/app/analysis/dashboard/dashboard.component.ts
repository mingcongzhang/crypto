import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';
import {DashboardService} from "@app/analysis/dashboard/dashboard.service";

@Component({
  selector: 'anms-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [routerTransition]
})
export class DashboardComponent implements OnInit {

  marketData: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.retrieveMarkets().subscribe(
      data => {
        this.marketData = data;
      },
      err => {
        console.error(err);
      }
    )
  }
}
