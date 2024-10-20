import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandeentrenamientoComponent } from './plandeentrenamiento.component';

describe('PlandeentrenamientoComponent', () => {
  let component: PlandeentrenamientoComponent;
  let fixture: ComponentFixture<PlandeentrenamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlandeentrenamientoComponent]
    });
    fixture = TestBed.createComponent(PlandeentrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
