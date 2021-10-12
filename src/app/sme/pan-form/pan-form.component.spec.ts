import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanFormComponent } from './pan-form.component';

describe('PanFormComponent', () => {
  let component: PanFormComponent;
  let fixture: ComponentFixture<PanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
