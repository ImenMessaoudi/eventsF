import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueEventComponent } from './statistique-event.component';

describe('StatistiqueEventComponent', () => {
  let component: StatistiqueEventComponent;
  let fixture: ComponentFixture<StatistiqueEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueEventComponent]
    });
    fixture = TestBed.createComponent(StatistiqueEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
