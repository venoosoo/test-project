import { Component } from '@angular/core';
import { TextEditorComponent } from '../word-input/word-input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',       
  standalone: true,
  imports: [CommonModule, TextEditorComponent],
  templateUrl: "./main.html",
  styleUrl: "./main.css",
})
export class MainComponent {}
