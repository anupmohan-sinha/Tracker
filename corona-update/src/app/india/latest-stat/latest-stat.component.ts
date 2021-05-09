import { StateWise } from './../india.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-stat',
  templateUrl: './latest-stat.component.html',
  styleUrls: ['./latest-stat.component.scss']
})
export class LatestStatComponent implements OnInit {

  @Input() overallCases: StateWise;

  constructor() { }

  ngOnInit(): void {

  }

}
