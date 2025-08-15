import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'word-list',
  imports: [CommonModule],
  templateUrl: './word-list.html',
  styleUrl: './word-list.css'
})
export class WordListComponent {
  @Input() words: Array<{ word: string; score: number; tags?: string[]}> = [];
  @Input() hasSearched: boolean = false;
  @Input() searchingWord: String = '';
  
  @Output() wordSelected = new EventEmitter<string>();


  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchingWord']) {
      const newValue = changes['searchingWord'].currentValue;
      if (newValue === '') {
        this.hasSearched = false;
      }
    }
  }

  OnButtonClick(word: string) {
    this.wordSelected.emit(word);
    
  }
}
