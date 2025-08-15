import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './word-input/word-input'; // ← import it here



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, TextEditorComponent],
  templateUrl: './main/main.html'
})
export class App {
  protected readonly title = signal('test-project');
}
