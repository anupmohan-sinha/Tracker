import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IndiaHomeComponent } from './india-home/india-home.component';
import { LatestStatComponent } from './latest-stat/latest-stat.component';
import { StatewiseStatComponent } from './statewise-stat/statewise-stat.component';
import { IndiaService } from './india.service';
import { DatewiseBarStatComponent } from './datewise-bar-stat/datewise-bar-stat.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RouterModule } from '@angular/router';
import { routes } from './india.routing';
import { IndiaResolverService } from './india-resolver.service';
import { StateResolverService } from './state-resolver.service';



@NgModule({
  declarations: [IndiaHomeComponent, LatestStatComponent, StatewiseStatComponent, DatewiseBarStatComponent, LineChartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    IndiaHomeComponent,
    RouterModule
  ],
  providers: [ IndiaService, IndiaResolverService, StateResolverService ]
})
export class IndiaModule { }
