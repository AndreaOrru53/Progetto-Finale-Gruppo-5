import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavouMovieComponent } from './list-favou-movie.component';

describe('ListFavouMovieComponent', () => {
  let component: ListFavouMovieComponent;
  let fixture: ComponentFixture<ListFavouMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavouMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavouMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
