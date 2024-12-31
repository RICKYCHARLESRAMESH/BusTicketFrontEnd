import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintripsComponent } from './admintrips.component';

describe('AdmintripsComponent', () => {
  let component: AdmintripsComponent;
  let fixture: ComponentFixture<AdmintripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmintripsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
