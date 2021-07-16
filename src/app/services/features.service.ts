import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  features = [
    {
      id: 1,
      name : 'Conception',
      description : 'Aide à la conception d\'application'
    },
    {
      id: 2,
      name : 'Développement',
      description : 'Implémentation d\'application'
    },
    {
      id: 3,
      name : 'Déploiement',
      description : 'Assistance dans le déploiement de vos applications'
    }
  ]

  featureSubject = new Subject<any[]>();
  showModalAddfeatureSubject = new Subject<boolean>();

  API_URL = 'https://test-node-jb.herokuapp.com/api';
  stuffObject$ = new Subject<Feature[]>();

  constructor(private httpClient: HttpClient) { }

  addFeature() {
    const newFeature = {
      id : this.features.length + 1,
      name : 'Whatever',
      description : 'Blabla Bla bla bla bla bla blab ablab'
    }
    this.features.push(newFeature);
    console.log(this.features);
    this.emitDataFeature();
  }

  emitDataFeature() {
    this.featureSubject.next(this.features.slice());
    console.log('Emit Data');
  }

  getFeature() {
    this.httpClient.get(`${this.API_URL}/stuff`).subscribe(
      (listStuff: any) => {
        this.stuffObject$.next(listStuff);
      },
      err => {
        console.error(err)
      },
      () => console.log('fini')
    )
  }

  postFeature(newFeature: Feature) {
    const userId = localStorage.getItem('USER_ID');
    newFeature.userId = userId;
    return this.httpClient.post(`${this.API_URL}/stuff`, newFeature)
  }
}
