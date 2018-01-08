import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {SharedModule} from '@app/shared';

import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisComponent} from './analysis/analysis.component';
import {TodosComponent} from './todos/todos.component';
import {todosReducer} from './todos/todos.reducer';
import {TodosEffects} from './todos/todos.effects';
import {StockMarketComponent} from './stock-market/stock-market.component';
import {stockMarketReducer} from './stock-market/stock-market.reducer';
import {StockMarketEffects} from './stock-market/stock-market.effects';
import {StockMarketService} from './stock-market/stock-market.service';
import {ParentComponent} from './theming/parent/parent.component';
import {ChildComponent} from './theming/child/child.component';
import {DashboardComponent} from "@app/analysis/dashboard/dashboard.component";
import {DashboardService} from "@app/analysis/dashboard/dashboard.service";
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {ReactiveFormsModule} from "@angular/forms";
import {PerformanceService} from "@app/analysis/performance/performance.service";
import {PerformanceComponent} from "@app/analysis/performance/performance.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    SharedModule,
    AnalysisRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    EffectsModule.forFeature([TodosEffects, StockMarketEffects]),
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  declarations: [
    AnalysisComponent,
    TodosComponent,
    StockMarketComponent,
    ParentComponent,
    ChildComponent,
    DashboardComponent,
    PerformanceComponent
  ],
  providers: [
    StockMarketService,
    DashboardService,
    PerformanceService
  ]
})
export class AnalysisModule {
  constructor() {}
}
