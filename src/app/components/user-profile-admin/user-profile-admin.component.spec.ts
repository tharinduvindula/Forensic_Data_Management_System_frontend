import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAdminComponent } from './user-profile-admin.component';

describe('UserProfileAdminComponent', () => {
  let component: UserProfileAdminComponent;
  let fixture: ComponentFixture<UserProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
