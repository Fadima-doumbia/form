import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Projet } from '../model/projet.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  dataProject? : Projet[];
  projectSubcription? : Subscription;

  selectFile:any =null;

  constructor(
    private postService: PostService,
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
    this.postService.send(formValues).subscribe()
    formValues["photo"] = this.selectFile;


    // this.authService.signup(formValues['nom'],formValues['description'],formValues['auteur'],formValues['besoin'])
    // .subscribe(
    //   (resp: any) => {
    //     this.router.navigate(['/home']);//redirect
    //   }
    // )
  }
}
