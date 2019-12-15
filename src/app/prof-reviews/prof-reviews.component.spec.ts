import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfReviewsComponent } from './prof-reviews.component';

describe('ProfReviewsComponent', () => {
  let component: ProfReviewsComponent;
  let fixture: ComponentFixture<ProfReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
