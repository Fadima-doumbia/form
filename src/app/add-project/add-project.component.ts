import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Projet } from '../model/projet.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  dataProject? : Projet[];
  projectSubcription? : Subscription;

  selectFile:any =null;

  constructor(
    private postService: PostService,
    private router : Router
  ) {}

  projectForm = new FormGroup({//mon objet de declaration des champs de mon formulaire
      id : new FormControl(''),
      name : new FormControl(''),
      description : new FormControl(''),
      entrepreneur : new FormControl('', Validators.required),
      besoin: new FormControl('', Validators.required),
      dateD: new FormControl("")
  });


  ngOnInit(): void {
    this.projectSubcription = this.postService.projetObject$.subscribe(
      (listProject: Projet[]) => {
        console.log(listProject);
        this.dataProject = [...listProject];
      }
    )
    this.postService.getProject()
  }

  ngOnDestroy(){
    this.projectSubcription?.unsubscribe();
    console.log('destroy component project')
  }

  addphoto(event:any){
    this.selectFile = event.target.files[0];
   // console.log(this.selectFile);
  }

  onSubmit() {//fonction bouton de validation et d'envoi des infos
    const formValues = this.projectForm?.value;
    console.log(formValues);//recuperer l'objet
    this.postService.send(formValues).subscribe(
      (project: Projet) => {
        console.log(project);
        this.dataProject?.push(project);
        this.router.navigate(['/projet']);//redirect
      }
    )
    formValues["photo"] = this.selectFile;
  }
}
