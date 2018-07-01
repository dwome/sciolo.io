import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailcardComponent } from './bookdetailcard.component';

describe('BookdetailcardComponent', () => {
  let component: BookdetailcardComponent;
  let fixture: ComponentFixture<BookdetailcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
