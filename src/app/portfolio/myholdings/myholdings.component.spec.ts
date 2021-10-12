import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyholdingsComponent } from './myholdings.component';

describe('MyholdingsComponent', () => {
  let component: MyholdingsComponent;
  let fixture: ComponentFixture<MyholdingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyholdingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyholdingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
