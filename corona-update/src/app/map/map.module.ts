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
      apiKey: 'AIzaSyCZ-afFOEg5f2BAFrSCGb02j1BiXkHM4Ig'
    }),
    RouterModule.forChild(routes)
  ],
  exports: [
    MapHomeComponent,
    RouterModule]
})
export class MapModule { }
