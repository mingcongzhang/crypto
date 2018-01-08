import {AfterViewInit, Component} from "@angular/core";
import {routerTransition} from "@app/core";
import {PerformanceService} from "@app/analysis/performance/performance.service";

@Component({
  selector: 'anms-performance',
  templateUrl: './performance.component.html',
  animations: [routerTransition]
})

export class PerformanceComponent implements AfterViewInit {

  marketData: any;
  multi: NGXChartMulti[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'USD';
  view: any[] = [1400, 600];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  // line, area
  autoScale = true;

  constructor(private performanceService: PerformanceService) {}

  ngAfterViewInit() {
    if (!this.marketData) {
      this.performanceService.retrieveMarketCharts('30days').subscribe(
        data => {
          this.marketData = data;
          let marketCap: NGXChartMulti = {
            name: null,
            series: []
          };
          marketCap.name = this.marketData.name;
          this.marketData['values'].forEach(value => {
            let date = new Date(value['x'] * 1000);
            let formatDate = new Intl.DateTimeFormat().format(date);
            let amount = value['y'];
            marketCap.series.push({
              name: formatDate.toString(),
              value: amount
            });
          });
          this.multi.push(marketCap);
        },
        err => {
          console.error(err);
        }
      );
    }
  }

  onSelect(event) {
    console.log(event);
  }
}

export interface NGXChartMulti {
  name: string;
  series: NGXChartMultiData[];
}

export interface NGXChartMultiData {
  name: string;
  value: number;
}
