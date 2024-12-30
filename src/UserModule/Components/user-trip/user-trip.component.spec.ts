import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripComponent } from './user-trip.component';

describe('UserTripComponent', () => {
  let component: UserTripComponent;
  let fixture: ComponentFixture<UserTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
