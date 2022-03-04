import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02DirectivasComponent } from './cmp02-directivas.component';

describe('Cmp02DirectivasComponent', () => {
  let component: Cmp02DirectivasComponent;
  let fixture: ComponentFixture<Cmp02DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02DirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
