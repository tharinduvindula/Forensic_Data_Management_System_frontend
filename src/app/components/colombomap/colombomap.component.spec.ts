import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombomapComponent } from './colombomap.component';

describe('ColombomapComponent', () => {
  let component: ColombomapComponent;
  let fixture: ComponentFixture<ColombomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
