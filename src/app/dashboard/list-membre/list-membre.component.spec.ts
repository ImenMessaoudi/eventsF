import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembreComponent } from './list-membre.component';

describe('ListMembreComponent', () => {
  let component: ListMembreComponent;
  let fixture: ComponentFixture<ListMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMembreComponent]
    });
    fixture = TestBed.createComponent(ListMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
