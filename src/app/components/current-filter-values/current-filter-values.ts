import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-current-filter-values',
  standalone: false,
  templateUrl: './current-filter-values.html',
  styleUrl: './current-filter-values.css'
})
export class CurrentFilterValues {
  @Input() filter!: {category: string, title: string, maxPrice: number | null};
}
