import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRetrieveComponent } from './demoretrieve.component';

describe('RetrieveComponent', () => {
  let component: DemoRetrieveComponent;
  let fixture: ComponentFixture<DemoRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
