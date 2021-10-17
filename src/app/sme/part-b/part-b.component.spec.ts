import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBComponent } from './part-b.component';

describe('PartBComponent', () => {
  let component: PartBComponent;
  let fixture: ComponentFixture<PartBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
