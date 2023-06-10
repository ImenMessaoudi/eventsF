import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueReservationComponent } from './statistique-reservation.component';

describe('StatistiqueReservationComponent', () => {
  let component: StatistiqueReservationComponent;
  let fixture: ComponentFixture<StatistiqueReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueReservationComponent]
    });
    fixture = TestBed.createComponent(StatistiqueReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
