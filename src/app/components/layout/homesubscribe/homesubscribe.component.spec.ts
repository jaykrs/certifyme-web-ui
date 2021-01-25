import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesubscribeComponent } from './homesubscribe.component';

describe('HomesubscribeComponent', () => {
  let component: HomesubscribeComponent;
  let fixture: ComponentFixture<HomesubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
