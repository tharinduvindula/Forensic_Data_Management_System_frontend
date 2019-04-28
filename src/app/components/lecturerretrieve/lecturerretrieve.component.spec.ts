import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerRetrieveComponent } from './lecturerretrieve.component';

describe('LecturerRetrieveComponent', () => {
  let component: LecturerRetrieveComponent;
  let fixture: ComponentFixture<LecturerRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
