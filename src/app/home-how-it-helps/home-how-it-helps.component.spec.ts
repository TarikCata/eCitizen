import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowItHelpsComponent } from './home-how-it-helps.component';

describe('HomeHowItHelpsComponent', () => {
  let component: HomeHowItHelpsComponent;
  let fixture: ComponentFixture<HomeHowItHelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHowItHelpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowItHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
