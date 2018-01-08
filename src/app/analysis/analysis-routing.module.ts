import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisComponent } from './analysis/analysis.component';
import { TodosComponent } from './todos/todos.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { ParentComponent } from './theming/parent/parent.component';
import {DashboardComponent} from "@app/analysis/dashboard/dashboard.component";
import {PerformanceComponent} from "@app/analysis/performance/performance.component";

const routes: Routes = [
  {
    path: '',
    component: AnalysisComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosComponent,
        data: {
          title: 'Todos'
        }
      },
      {
        path: 'stock-market',
        component: StockMarketComponent,
        data: {
          title: 'Stock Market'
        }
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: {
          title: 'Theming'
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'performance',
        component: PerformanceComponent,
        data: {
          title: 'Performance'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule {}
