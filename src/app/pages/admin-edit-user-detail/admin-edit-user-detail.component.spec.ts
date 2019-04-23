import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditUserDetailComponent } from './admin-edit-user-detail.component';

describe('AdminEditUserDetailComponent', () => {
  let component: AdminEditUserDetailComponent;
  let fixture: ComponentFixture<AdminEditUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
