import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileViewLectureComponent } from './user-profile-view-lecture.component';

describe('UserProfileViewLectureComponent', () => {
  let component: UserProfileViewLectureComponent;
  let fixture: ComponentFixture<UserProfileViewLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileViewLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileViewLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
