import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homebanner3Component } from './homebanner3.component';

describe('Homebanner3Component', () => {
  let component: Homebanner3Component;
  let fixture: ComponentFixture<Homebanner3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homebanner3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homebanner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
