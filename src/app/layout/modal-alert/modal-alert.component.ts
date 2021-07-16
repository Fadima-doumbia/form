import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {
  modalManipulation? : Modal;
  @ViewChild('modalAlert') modalAlert? : ElementRef<any>;
  contentModal? : { title : string , content : string};
  alertModalSub? : Subscription; 

  constructor(private modalService : ModalService) { }

  ngOnInit(): void {
    this.alertModalSub = this.modalService.alertModalSub.subscribe(
      (objContentModal : { title : string , content : string}) => {
        this.contentModal = objContentModal;
        this.showModal();
      }
    )
  }

  ngAfterViewInit(): void {
    console.log('VIewInit');
    this.modalManipulation = new Modal(this.modalAlert?.nativeElement, {});
  }

  showModal(): void {
    this.modalManipulation?.show();
    setTimeout(() => {
      this.closeModal();
    }, 3000);
  }
  
  closeModal() {
    this.modalManipulation?.hide();
  }

}
