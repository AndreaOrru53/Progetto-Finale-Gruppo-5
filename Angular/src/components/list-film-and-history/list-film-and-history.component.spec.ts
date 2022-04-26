import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmAndHistoryComponent } from './list-film-and-history.component';

describe('ListFilmAndHistoryComponent', () => {
  let component: ListFilmAndHistoryComponent;
  let fixture: ComponentFixture<ListFilmAndHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilmAndHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmAndHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
