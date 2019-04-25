import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDeleteComponent } from './report-delete.component';

describe('ReportDeleteComponent', () => {
  let component: ReportDeleteComponent;
  let fixture: ComponentFixture<ReportDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
