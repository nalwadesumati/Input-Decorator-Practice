import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Imobile } from '../models/mobile';
import { mobileProducts } from '../shared/const/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss'],
})
export class MobileDashboardComponent implements OnInit {
  [x: string]: any;
  mobileArr: Imobile[] = mobileProducts;
  trackById!: TrackByFunction<Imobile>;
  constructor() {}

  ngOnInit(): void {}
}
