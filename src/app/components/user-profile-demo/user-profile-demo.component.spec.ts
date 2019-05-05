import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDemoComponent} from './user-profile-demo.component';

describe('UserProfileComponent', () => {
  let component: UserProfileDemoComponent;
  let fixture: ComponentFixture<UserProfileDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDemoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
