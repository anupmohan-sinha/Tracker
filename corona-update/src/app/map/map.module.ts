import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './map.routing';
import { MapHomeComponent } from './map-home/map-home.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [MapHomeComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forChild(routes)
  ],
  exports: [
    MapHomeComponent,
    RouterModule]
})
export class MapModule { }
