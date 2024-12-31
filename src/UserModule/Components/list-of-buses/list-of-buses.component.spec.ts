import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBusesComponent } from './list-of-buses.component';

describe('ListOfBusesComponent', () => {
  let component: ListOfBusesComponent;
  let fixture: ComponentFixture<ListOfBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfBusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
