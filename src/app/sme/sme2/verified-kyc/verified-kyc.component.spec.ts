import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedKycComponent } from './verified-kyc.component';

describe('VerifiedKycComponent', () => {
  let component: VerifiedKycComponent;
  let fixture: ComponentFixture<VerifiedKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
