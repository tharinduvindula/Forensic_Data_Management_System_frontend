import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersidebarComponent } from './lecturersidebar.component';

describe('LecturersidebarComponent', () => {
  let component: LecturersidebarComponent;
  let fixture: ComponentFixture<LecturersidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LecturersidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
