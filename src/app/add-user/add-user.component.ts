import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  dataUser? : User[];
  userSubcription? : Subscription;
  selectFile:any =null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  userForm = new FormGroup({//mon objet de declaration des champs de mon formulaire
      id : new FormControl(''),
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      telephone : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      presentation : new FormControl(''),
      pays : new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      image: new FormControl(""),
  });

  // deleteUser(id:number){
  //   this.userService.deleteUser(id).subscribe(
  //     (resp : any) => {
  //       const index: any = this.dataUser?.findIndex((user : any) => user.id === id);
  //       this.dataUser?.splice(index, 1);
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => console.log('fini')
  //   );
  // }


  // .subscribe(
  //   (resp : any) => {
  //     const index = this.users.findIndex((user : any) => user.id === id);
  //     this.users.splice(index, 1);
  //   },
  //   err => {
  //     console.log(err);
  //   },
  //   () => console.log('fini')
  // );

  ngOnInit(): void {
    this.userSubcription = this.userService.userObject$.subscribe(
      (listUsers : User[]) => {
        console.log(listUsers);
        this.dataUser = [...listUsers];
      }
    )
    this.userService.getUser()
  }

  ngOnDestroy(){
    this.userSubcription?.unsubscribe();
    console.log('destroy component user')
  }

  addphoto(event:any){
    const file = event.target.files[0];
    this.selectFile = event.target.files[0];
    this.userForm.patchValue({image:file});
    this.selectFile = file;
   // console.log(this.selectFile);
  }

  onSubmit() {//fonction bouton de validation et d'envoi des infos
    const formValues = this.userForm?.value;
    console.log(formValues);//recuperer l'objet
    this.userService.send(formValues).subscribe(
      (user : User) => {
        console.log(user);
        this.dataUser?.push(user);
        this.router.navigate(['/user']);//redirect
      }
    )
    formValues["photo"] = this.selectFile;

    // this.authService.signup(formValues['nom'],formValues['description'],formValues['auteur'],formValues['besoin'])
    // .subscribe(
    //   (resp: any) => {
    //     this.router.navigate(['/home']);//redirect
    //   }
    // )
  }
}
