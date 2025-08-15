import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListComponent } from './word-list';

describe('WordList', () => {
  let component: WordListComponent;
  let fixture: ComponentFixture<WordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
