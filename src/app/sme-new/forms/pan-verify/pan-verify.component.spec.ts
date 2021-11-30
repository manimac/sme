import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanVerifyComponent } from './pan-verify.component';

describe('PanVerifyComponent', () => {
  let component: PanVerifyComponent;
  let fixture: ComponentFixture<PanVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
