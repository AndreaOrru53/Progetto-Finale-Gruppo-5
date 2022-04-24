import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieCommentComponent } from './add-movie-comment.component';

describe('AddMovieCommentComponent', () => {
  let component: AddMovieCommentComponent;
  let fixture: ComponentFixture<AddMovieCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
