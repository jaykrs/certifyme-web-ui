import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeventsComponent } from './homevents.component';

describe('HomeventsComponent', () => {
  let component: HomeventsComponent;
  let fixture: ComponentFixture<HomeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
