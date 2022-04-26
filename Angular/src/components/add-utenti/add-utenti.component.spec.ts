import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtentiComponent } from './add-utenti.component';

describe('AddUtentiComponent', () => {
  let component: AddUtentiComponent;
  let fixture: ComponentFixture<AddUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
