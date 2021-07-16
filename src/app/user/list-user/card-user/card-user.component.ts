import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() firstName? : string;
  @Input() lastName? : string;
  @Input() presentation? : string;
  @Input() image? : File;
  @Input() id? : string;
  constructor() { }

  ngOnInit(): void {
  }

}
