import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  currentFilter: { category: string; title: string; maxPrice: number | null } = {
    category: '',
    title: '',
    maxPrice: null
  };

  onFilterChanged(filterData: {category: string, title: string, maxPrice: number | null}) {
    this.currentFilter = filterData;
  }
}
