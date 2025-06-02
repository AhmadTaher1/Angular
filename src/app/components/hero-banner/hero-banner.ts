import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: false,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBanner {
  welcomeMessage = 'Welcome to ProductApp';
  subMessage = 'Discover amazing products tailored just for you!';
}
