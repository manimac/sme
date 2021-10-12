import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioLinkDelinkComponent } from './folio-link-delink.component';

describe('FolioLinkDelinkComponent', () => {
  let component: FolioLinkDelinkComponent;
  let fixture: ComponentFixture<FolioLinkDelinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolioLinkDelinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolioLinkDelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
