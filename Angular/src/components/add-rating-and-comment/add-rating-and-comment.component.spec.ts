import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingAndCommentComponent } from './add-rating-and-comment.component';

describe('AddRatingAndCommentComponent', () => {
  let component: AddRatingAndCommentComponent;
  let fixture: ComponentFixture<AddRatingAndCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRatingAndCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRatingAndCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
