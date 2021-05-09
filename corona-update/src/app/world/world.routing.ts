import { Routes } from '@angular/router';
import { WorldHomeComponent } from './world-home/world-home.component';
import { WorldResolverService } from './world-resolver.service';
import { CountryResolverService } from './country-resolver.service';

export const routes: Routes = [{
  path: '',
  component: WorldHomeComponent, resolve: {
    worldData: WorldResolverService,
    countryData: CountryResolverService
  }
}];
