import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynetworkComponent } from './mynetwork.component';

describe('MynetworkComponent', () => {
  let component: MynetworkComponent;
  let fixture: ComponentFixture<MynetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
