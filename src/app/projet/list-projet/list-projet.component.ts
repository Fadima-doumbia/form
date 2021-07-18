import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {
  @Input() listProject? : any[];

  constructor(
    private postService : PostService,
  ) { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   this.postService.deleteUser(id).subscribe(
  //     (resp : any) => {
  //       const index: any = this.dataPost?.findIndex((post : any) => post.id === id);
  //       this.datapost?.splice(index, 1);
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => console.log('fini')
  //   );
  // }
  // }
  // deleteUser(id:number){
  //   this.postService.deleteUser(id).subscribe(
  //     (resp : any) => {
  //       const index: any = this.dataPost?.findIndex((post : any) => post.id === id);
  //       this.datapost?.splice(index, 1);
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => console.log('fini')
  //   );
  // }

}
