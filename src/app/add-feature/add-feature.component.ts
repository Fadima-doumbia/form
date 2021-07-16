import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Feature } from '../models/feature.model';
import { FeaturesService } from '../services/features.service';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit, OnDestroy {
  addFeatureForm: FormGroup;
  /**
   * Explication de l'utilisation de la modal Bootstrap 5 avec Angular sous ce lien 
   * https://stackblitz.com/edit/angular-ivy-n1khws?file=src%2Fapp%2Fapp.component.ts
  */
  modalManipulation? : Modal;
  @ViewChild('modalAddFeature') modalAddFeature? : ElementRef<any>;
  subjectModalSub?: Subscription;

  constructor(
    private featuresService : FeaturesService,
    private modalService : ModalService,
    private router : Router,
  ) {
    this.addFeatureForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.subjectModalSub = this.featuresService.showModalAddfeatureSubject.subscribe(
      (boolModal: boolean) => {
        boolModal && this.showModal()
      }
    )
   this.initForm();
  }

  ngAfterViewInit(): void {
    console.log('VIewInit');
    this.modalManipulation = new Modal(this.modalAddFeature?.nativeElement, {});
  }

  showModal(): void {
    this.modalManipulation?.show();
  }

  closeModal() {
    this.modalManipulation?.hide();
  }

  initForm() {
    this.addFeatureForm = new FormGroup({
      newTitle : new FormControl('', [Validators.required]),
      newDescription : new FormControl('', [Validators.required]),
      newPrice : new FormControl('', [Validators.required, Validators.min(0)]),
    })
    this.modalService.alertModalSub.next({title : 'Réussite ! ', content : 'Nouvelle feature créée !'});
  }

  onSubmit() {
    const formValues = this.addFeatureForm.value;
    
    const newFeature = new Feature(
      '', 
      formValues['newTitle'],
      formValues['newDescription'],
      formValues['newPrice'],
      ''
    )
    this.featuresService.postFeature(newFeature).subscribe(
      (respAddFeature: any) => {
        console.log('New Feature post');
        this.closeModal();
        this.router.navigate(['/features']);
        this.modalService.alertModalSub.next({title : 'Réussite ! ', content : 'Nouvelle feature créée !'});
      }
    )
  }

  ngOnDestroy():void {
    this.subjectModalSub?.unsubscribe();
  }

}
