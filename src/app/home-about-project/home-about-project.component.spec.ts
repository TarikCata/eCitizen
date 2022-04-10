import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutProjectComponent } from './home-about-project.component';

describe('HomeAboutProjectComponent', () => {
  let component: HomeAboutProjectComponent;
  let fixture: ComponentFixture<HomeAboutProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
