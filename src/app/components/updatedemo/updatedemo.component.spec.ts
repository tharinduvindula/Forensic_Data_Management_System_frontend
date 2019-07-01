import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedemoComponent } from './updatedemo.component';

describe('UpdatedemoComponent', () => {
  let component: UpdatedemoComponent;
  let fixture: ComponentFixture<UpdatedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
