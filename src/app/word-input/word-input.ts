import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WordListComponent } from '../word-list/word-list';

@Component({
  selector: 'word-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, WordListComponent],
  templateUrl: './word-input.html',
  styleUrl: './word-input.css',
})
export class TextEditorComponent {
  userText = '';
  selectedText = '';
  api_results: any[] = [];
  charCount = 0;
  wordCount = 0;
  hasSearched = false; 
  selectionStart: number = 0;
  selectionEnd: number = 0;


  constructor(private http: HttpClient) {}

  @ViewChild('wordListComp') wordList!: WordListComponent;

  copyText(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  }

  updateTextStats() {
    const text = this.userText;

    // Count characters excluding spaces
    this.charCount = text.replace(/\s/g, '').length;

    // Count words
    this.wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }

  getSelectedText(event: MouseEvent | KeyboardEvent) {
    const textarea = event.target as HTMLTextAreaElement;
    this.selectionStart = textarea.selectionStart;
    this.selectionEnd = textarea.selectionEnd;
    this.selectedText = this.selectionStart !== this.selectionEnd
      ? this.userText.substring(this.selectionStart, this.selectionEnd)
      : '';
  }

  formatText(text: string): string {
    const words = text.trim().split(/\s+/);
    return words.length <= 1 ? text.trim() : words.join('+');
  }

  ChangeSelectedText(newText: string) {
    // Ensure the selection indices are valid
    if (
      this.selectionStart >= 0 &&
      this.selectionEnd <= this.userText.length &&
      this.selectionStart <= this.selectionEnd
    ) {
      // Replace the text between selectionStart and selectionEnd
      this.userText =
        this.userText.substring(0, this.selectionStart) +
        newText +
        this.userText.substring(this.selectionEnd);
      this.selectedText = '';
      this.api_results = [];
      this.updateTextStats();
      this.hasSearched = false
    }
  }

  onButtonClick() {
    if (this.selectedText) {
      const link = 'https://api.datamuse.com/words?ml=' + this.formatText(this.selectedText);
      this.http.get<any>(link).subscribe({
        next: (data) => {
          this.api_results = data.slice(0, 9);
          console.log(data);
          this.hasSearched = true;
        }, 
        error: (err) => {
          console.error('API error', err);
        },
      });
    }
  }
}