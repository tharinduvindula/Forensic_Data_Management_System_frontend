import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicereportComponent } from './policereport.component';

describe('PolicereportComponent', () => {
  let component: PolicereportComponent;
  let fixture: ComponentFixture<PolicereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
