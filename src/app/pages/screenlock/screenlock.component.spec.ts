import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenlockComponent } from './screenlock.component';

describe('ScreenlockComponent', () => {
  let component: ScreenlockComponent;
  let fixture: ComponentFixture<ScreenlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
