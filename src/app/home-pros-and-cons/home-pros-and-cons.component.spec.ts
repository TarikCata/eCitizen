import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProsAndConsComponent } from './home-pros-and-cons.component';

describe('HomeProsAndConsComponent', () => {
  let component: HomeProsAndConsComponent;
  let fixture: ComponentFixture<HomeProsAndConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProsAndConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProsAndConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
