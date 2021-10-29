import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sme2Component } from './sme2.component';

describe('Sme2Component', () => {
  let component: Sme2Component;
  let fixture: ComponentFixture<Sme2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sme2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
