import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  @Input() listUsers? : any[];

  constructor() { }

  ngOnInit(): void {
  }


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
}
