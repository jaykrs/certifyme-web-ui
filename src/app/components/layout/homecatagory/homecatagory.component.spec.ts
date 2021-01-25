import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecatagoryComponent } from './homecatagory.component';

describe('HomecatagoryComponent', () => {
  let component: HomecatagoryComponent;
  let fixture: ComponentFixture<HomecatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
