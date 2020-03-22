import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroEditComponent } from './intro-edit.component';

describe('IntroEditComponent', () => {
  let component: IntroEditComponent;
  let fixture: ComponentFixture<IntroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
