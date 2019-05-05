import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileLectureComponent } from './user-profile-lecture.component';

describe('UserProfileLectureComponent', () => {
  let component: UserProfileLectureComponent;
  let fixture: ComponentFixture<UserProfileLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
