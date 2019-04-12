import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerdashboardComponent } from './lecturerdashboard.component';

describe('DashboardComponent', () => {
  let component: LecturerdashboardComponent;
  let fixture: ComponentFixture<LecturerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
