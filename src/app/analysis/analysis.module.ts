import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';
import { TodosComponent } from './todos/todos.component';
import { todosReducer } from './todos/todos.reducer';
import { TodosEffects } from './todos/todos.effects';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketEffects } from './stock-market/stock-market.effects';
import { StockMarketService } from './stock-market/stock-market.service';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import {DashboardComponent} from "@app/analysis/dashboard/dashboard.component";
import {DashboardService} from "@app/analysis/dashboard/dashboard.service";

@NgModule({
  imports: [
    SharedModule,
    AnalysisRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    EffectsModule.forFeature([TodosEffects, StockMarketEffects])
  ],
  declarations: [
    AnalysisComponent,
    TodosComponent,
    StockMarketComponent,
    ParentComponent,
    ChildComponent,
    DashboardComponent
  ],
  providers: [
    StockMarketService,
    DashboardService
  ]
})
export class AnalysisModule {
  constructor() {}
}
