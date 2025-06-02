import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilterValues } from './current-filter-values';

describe('CurrentFilterValues', () => {
  let component: CurrentFilterValues;
  let fixture: ComponentFixture<CurrentFilterValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentFilterValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFilterValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
