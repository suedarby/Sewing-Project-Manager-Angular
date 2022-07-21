import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppedComponent } from './shopped.component';

describe('ShoppedComponent', () => {
  let component: ShoppedComponent;
  let fixture: ComponentFixture<ShoppedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
