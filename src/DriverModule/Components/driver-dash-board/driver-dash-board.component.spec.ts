import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDashBoardComponent } from './driver-dash-board.component';

describe('DriverDashBoardComponent', () => {
  let component: DriverDashBoardComponent;
  let fixture: ComponentFixture<DriverDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
