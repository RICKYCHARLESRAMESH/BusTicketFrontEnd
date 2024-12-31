import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroutesComponent } from './adminroutes.component';

describe('AdminroutesComponent', () => {
  let component: AdminroutesComponent;
  let fixture: ComponentFixture<AdminroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminroutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
