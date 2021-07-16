import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  projects = [
    {
      id : 1,
      name : "nomProjet",
      description : "c'est un projet",
      entrepreneur : "fadimou",
      besoin : "materiel",
      dateD: "01-04-2021"
    },
    {
      id : 2,
      name : "nomProjet2",
      description : "c'est un projet2",
      entrepreneur : "fadimou2",
      besoin : "materiel2",
      dateD: "01-05-2021"
    },
    {
      id : 3,
      name : "nomProjet3",
      description : "c'est un projet3",
      entrepreneur : "fadimou3",
      besoin : "materiel3",
      dateD: "01-06-2021"
    }
  ]

  private baseUrl: string = "http://localhost:8080/projets"
  projectSubject = new Subject<any[]>();
  projetObject$ = new Subject<Projet[]>();



  constructor(private httpClient: HttpClient) { }

  addProject(){
    const newProject = {
      id : this.projects.length + 1,
      name : "nexProjectName",
      description : "new description projet ",
      entrepreneur : "User",
      besoin : "new besoin",
      dateD: "new date"
    }
    this.projects.push(newProject);
    console.log(this.projects);
    this.emitDataProject();
  }

  emitDataProject(){
    this.projectSubject.next(this.projects.slice());
    console.log('emit data');
  }

  getProject() {
    this.httpClient.get(`${this.baseUrl}`).subscribe(
      (listProj: any) => {
        this.projetObject$.next(listProj);
      },
      err => {
        console.error(err)
      },
      () => console.log('fini')
    )
  }

  send(newProjet: Projet){
    const body=JSON.stringify(newProjet);
    const formData=new FormData();
    for(const [key, value] of Object.entries(newProjet)){
      formData.append(key,value)
    }
    console.log(body);
    return this.httpClient.post(this.baseUrl, newProjet)
  }
}
