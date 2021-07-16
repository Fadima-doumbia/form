import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FeaturesService } from 'src/app/services/features.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private featuresService: FeaturesService,
    private authService: AuthService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onClickAddFeature() {
    this.featuresService.addFeature();
  }

  onClickShowModal() {
    this.featuresService.showModalAddfeatureSubject.next(true);
  }

  onClickLogout() {
    this.authService.logout();
  }

}
