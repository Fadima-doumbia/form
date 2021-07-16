import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feature } from '../models/feature.model';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  dataFeature? : Feature[];
  featureSubscription? : Subscription;

  constructor(
    private featuresService : FeaturesService
  ) { }

  ngOnInit(): void {
    this.featureSubscription  = this.featuresService.stuffObject$.subscribe(
      (listFeature: Feature[] ) => {
        this.dataFeature = [...listFeature];
      }
    )
    this.featuresService.getFeature()
  }

  ngOnDestroy() {
    this.featureSubscription?.unsubscribe();
    console.log('Destroy component feature');
  }

}
