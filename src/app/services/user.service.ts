import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id : 1,
      firsName : "Nom",
      lastName : "Prenom",
      telephone : "07 98 75 43 28",
      email: "mail@mail.com",
      presentation : "je me presente",
      pays : "Tombouctou",
      image : "",
      password : "motdepasse"
    },
    {
      id : 2,
      firsName : "Nom2",
      lastName : "Prenom2",
      telephone : "07 98 75 43 28",
      email: "mail2@mail.com",
      presentation : "je me presente2",
      pays : "gao",
      image : "",
      password : "motdepasse2"
    },
    {
      id : 3,
      firsName : "Nom3",
      lastName : "Prenom3",
      telephone : "07 98 75 43 28",
      email: "mail3@mail.com",
      presentation : "je me presente3",
      pays : "Kidal",
      image : "",
      password : "motdepasse3"
    },
  ]

  private baseUrl: string = "http://localhost:8080/users"
  userSubject = new Subject<any[]>();
  userObject$ = new Subject<User[]>();

  constructor(private httpClient: HttpClient,) { }

  addUser(){
    const newUser = {
      id : this.users.length + 1,
      firsName : "Nom",
      lastName : "Prenom",
      telephone : "07 98 75 43 28",
      email: "mail@mail.com",
      presentation : "je me presente",
      pays : "Kidal",
      image : "",
      password : "motdepasse"
    }
    this.users.push(newUser);
    console.log(this.users);
    this.emitDataUser();
  }

  deleteUser(id : number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  emitDataUser(){
    this.userSubject.next(this.users.slice());
    console.log('emit data')
  }

  getUser() {
    this.httpClient.get(`${this.baseUrl}`).subscribe(
      (listUsers : any) => {
        this.userObject$.next(listUsers);
      },
      err => {
        console.log(err);
      },
      () => console.log('fini')
    )
  }

  send(newModel : User){
    // const body=JSON.stringify(newUser);
    // const formData=new FormData();
    // for(const [key, value] of Object.entries(newUser)){
    //   formData.append(key,value)
    // }
    // formData.append("photo",newProjet.photo?.name)
    // console.log(newProjet)
    // console.log(body);
    const formData = new FormData();
    const userImage:any = newModel.image;
    formData.append("image", userImage);//pr ajouter l'img dans le formdata
    delete newModel.image;//pour supprimer l'image
    formData.append("users", new Blob([JSON.stringify(newModel)], {
      type:"application/json"
    }))
    return this.httpClient.post(this.baseUrl, formData)
  }
}




// {
//   "id" : "1",
//   "firstName" : "nom",
//   "lastName": "prenom",
//   "telephone": "07 69 45 67 89",
//   "presentation": "Je me presente",
//   "email": "essai@mail.com",
//   "password": "123essai",
//   "image" : null
// }
// {
//   "id": "1",
//   "firstName": "mon nom",
//   "lastName": "mon prenom",
//   "telephone": "07 69 32",
//   "presentation": "Je me présente",
//   "email": "essai@mail.com",
//   "image": "essai",
//   "password": null
//   }
