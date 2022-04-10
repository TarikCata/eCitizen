import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCertificationComponent } from './document-certification.component';

describe('DocumentCertificationComponent', () => {
  let component: DocumentCertificationComponent;
  let fixture: ComponentFixture<DocumentCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
