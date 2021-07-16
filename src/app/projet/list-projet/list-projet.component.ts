import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {
  @Input() listProject? : any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
