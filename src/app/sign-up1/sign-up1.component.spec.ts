import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp1Component } from './sign-up1.component';

describe('SignUp1Component', () => {
  let component: SignUp1Component;
  let fixture: ComponentFixture<SignUp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUp1Component]
    });
    fixture = TestBed.createComponent(SignUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
