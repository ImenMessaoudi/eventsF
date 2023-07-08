import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeEventComponent } from './like-event.component';

describe('LikeEventComponent', () => {
  let component: LikeEventComponent;
  let fixture: ComponentFixture<LikeEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeEventComponent]
    });
    fixture = TestBed.createComponent(LikeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
