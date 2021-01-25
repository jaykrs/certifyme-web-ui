import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homebanner2Component } from './homebanner2.component';

describe('Homebanner2Component', () => {
  let component: Homebanner2Component;
  let fixture: ComponentFixture<Homebanner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homebanner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homebanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
