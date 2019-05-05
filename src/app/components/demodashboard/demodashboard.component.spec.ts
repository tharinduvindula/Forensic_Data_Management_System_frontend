import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodashboardComponent } from './demodashboard.component';

describe('DashboardComponent', () => {
  let component: DemodashboardComponent;
  let fixture: ComponentFixture<DemodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
