import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersViewComponent } from './burgers-view.component';

describe('BurgersViewComponent', () => {
  let component: BurgersViewComponent;
  let fixture: ComponentFixture<BurgersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
