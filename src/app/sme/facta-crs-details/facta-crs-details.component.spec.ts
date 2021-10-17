import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactaCrsDetailsComponent } from './facta-crs-details.component';

describe('FactaCrsDetailsComponent', () => {
  let component: FactaCrsDetailsComponent;
  let fixture: ComponentFixture<FactaCrsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactaCrsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactaCrsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
