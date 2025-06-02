import { Component } from '@angular/core';

@Component({
  selector: 'app-textbox',
  standalone: false,
  templateUrl: './textbox.html',
  styleUrl: './textbox.css'
})
export class Textbox {
  totalProducts: number = 6;
}
