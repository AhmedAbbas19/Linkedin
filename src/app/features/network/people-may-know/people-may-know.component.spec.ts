import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleMayKnowComponent } from './people-may-know.component';

describe('PeopleMayKnowComponent', () => {
  let component: PeopleMayKnowComponent;
  let fixture: ComponentFixture<PeopleMayKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleMayKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleMayKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
