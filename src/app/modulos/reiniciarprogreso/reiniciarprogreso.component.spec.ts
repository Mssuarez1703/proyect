import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiniciarprogresoComponent } from './reiniciarprogreso.component';

describe('ReiniciarprogresoComponent', () => {
  let component: ReiniciarprogresoComponent;
  let fixture: ComponentFixture<ReiniciarprogresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReiniciarprogresoComponent]
    });
    fixture = TestBed.createComponent(ReiniciarprogresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
