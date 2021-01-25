import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homebanner4Component } from './homebanner4.component';

describe('Homebanner4Component', () => {
  let component: Homebanner4Component;
  let fixture: ComponentFixture<Homebanner4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homebanner4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homebanner4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
