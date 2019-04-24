import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDeleteComponent } from './user-profile-delete.component';

describe('UserProfileDeleteComponent', () => {
  let component: UserProfileDeleteComponent;
  let fixture: ComponentFixture<UserProfileDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
