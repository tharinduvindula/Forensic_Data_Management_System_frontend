import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileViewDemoComponent } from './user-profile-view-demo.component';

describe('UserProfileViewDemoComponent', () => {
  let component: UserProfileViewDemoComponent;
  let fixture: ComponentFixture<UserProfileViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
