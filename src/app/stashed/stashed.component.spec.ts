import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StashedComponent } from './stashed.component';

describe('StashedComponent', () => {
  let component: StashedComponent;
  let fixture: ComponentFixture<StashedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StashedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StashedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
