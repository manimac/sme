import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedPanFormComponent } from './verified-pan-form.component';

describe('VerifiedPanFormComponent', () => {
  let component: VerifiedPanFormComponent;
  let fixture: ComponentFixture<VerifiedPanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedPanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedPanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
