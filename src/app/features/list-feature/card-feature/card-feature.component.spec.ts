import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeatureComponent } from './card-feature.component';

describe('CardFeatureComponent', () => {
  let component: CardFeatureComponent;
  let fixture: ComponentFixture<CardFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
