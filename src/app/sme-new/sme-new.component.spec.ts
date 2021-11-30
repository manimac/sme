import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeNewComponent } from './sme-new.component';

describe('SmeNewComponent', () => {
  let component: SmeNewComponent;
  let fixture: ComponentFixture<SmeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
