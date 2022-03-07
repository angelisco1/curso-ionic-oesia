import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03ServiciosComponent } from './cmp03-servicios.component';

describe('Cmp03ServiciosComponent', () => {
  let component: Cmp03ServiciosComponent;
  let fixture: ComponentFixture<Cmp03ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03ServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
