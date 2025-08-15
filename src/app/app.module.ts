import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextEditorComponent } from './word-input/word-input';

@Component({
  selector: 'app-main',
  templateUrl: './main/main.html',
  standalone: true,
  imports: [FormsModule, TextEditorComponent] // import other standalone components here
})
export class MainComponent {}