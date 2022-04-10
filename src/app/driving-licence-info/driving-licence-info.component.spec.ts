import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingLicenceInfoComponent } from './driving-licence-info.component';

describe('DrivingLicenceInfoComponent', () => {
  let component: DrivingLicenceInfoComponent;
  let fixture: ComponentFixture<DrivingLicenceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingLicenceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingLicenceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
