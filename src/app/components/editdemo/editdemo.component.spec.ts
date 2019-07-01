import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdemoComponent } from './editdemo.component';

describe('EditdemoComponent', () => {
  let component: EditdemoComponent;
  let fixture: ComponentFixture<EditdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
