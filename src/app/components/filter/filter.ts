import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  categories: string[] = ['Electronics', 'Books', 'Clothing', 'Toys']; // مثال للفئات
  selectedCategory: string = '';
  productTitle: string = '';
  maxPrice: number | null = null;

  @Output() filterChanged = new EventEmitter<{category: string, title: string, maxPrice: number | null}>();

  onFilterChange() {
    this.filterChanged.emit({
      category: this.selectedCategory,
      title: this.productTitle,
      maxPrice: this.maxPrice
    });
  }

}
