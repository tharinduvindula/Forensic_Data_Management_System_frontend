import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UserProfileViewAdminComponent } from './user-profile-view-admin.component';

describe('UserProfileViewComponent', () => {
  let component:UserProfileViewAdminComponent;
  let fixture: ComponentFixture<UserProfileViewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileViewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
