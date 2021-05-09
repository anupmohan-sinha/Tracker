import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldStat, CountryCases } from '../world.model';

@Component({
  selector: 'app-world-home',
  templateUrl: './world-home.component.html',
  styleUrls: ['./world-home.component.scss']
})
export class WorldHomeComponent implements OnInit {

  worldStatData: WorldStat;
  countryStatData: CountryCases;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.worldStatData = this.route.snapshot.data.worldData;
    this.countryStatData = this.route.snapshot.data.countryData;
  }

}
