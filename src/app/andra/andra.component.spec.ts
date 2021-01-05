import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndraComponent } from './andra.component';

describe('AndraComponent', () => {
  let component: AndraComponent;
  let fixture: ComponentFixture<AndraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
