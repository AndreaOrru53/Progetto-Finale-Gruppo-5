import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCommentDetailComponent } from './movie-comment-detail.component';

describe('MovieCommentDetailComponent', () => {
  let component: MovieCommentDetailComponent;
  let fixture: ComponentFixture<MovieCommentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCommentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
