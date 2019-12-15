import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItworksComponent } from './how-itworks.component';

describe('HowItworksComponent', () => {
  let component: HowItworksComponent;
  let fixture: ComponentFixture<HowItworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
