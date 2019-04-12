import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosidebarComponent } from './demosidebar.component';

describe('SidebarComponent', () => {
  let component: DemosidebarComponent;
  let fixture: ComponentFixture<DemosidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemosidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
