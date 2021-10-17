import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateBeneficiaryOwnerComponent } from './ultimate-beneficiary-owner.component';

describe('UltimateBeneficiaryOwnerComponent', () => {
  let component: UltimateBeneficiaryOwnerComponent;
  let fixture: ComponentFixture<UltimateBeneficiaryOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateBeneficiaryOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateBeneficiaryOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
