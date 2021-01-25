import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesectionheaderComponent } from './homesectionheader.component';

describe('HomesectionheaderComponent', () => {
  let component: HomesectionheaderComponent;
  let fixture: ComponentFixture<HomesectionheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesectionheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesectionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
