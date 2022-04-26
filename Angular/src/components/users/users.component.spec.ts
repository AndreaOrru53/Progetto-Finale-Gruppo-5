import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userComponent } from './users.component';

describe('UserComponent', () => {
  let component: userComponent;
  let fixture: ComponentFixture<userComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
