import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTesterComponent } from './child-tester.component';

describe('ChildTesterComponent', () => {
  let component: ChildTesterComponent;
  let fixture: ComponentFixture<ChildTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
