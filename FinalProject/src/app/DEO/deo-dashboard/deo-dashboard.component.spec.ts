import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoDashboardComponent } from './deo-dashboard.component';

describe('DeoDashboardComponent', () => {
  let component: DeoDashboardComponent;
  let fixture: ComponentFixture<DeoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
