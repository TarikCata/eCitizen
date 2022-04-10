import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECountryComponent } from './e-country.component';

describe('ECountryComponent', () => {
  let component: ECountryComponent;
  let fixture: ComponentFixture<ECountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
