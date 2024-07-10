import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [CommonModule, BaseModalComponent, FormsModule],
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent {
  @Input() isOpen: boolean = false;
  @Input() filterField: string = '';

  close() {
    this.isOpen = false;
  }

  applyFilters() {
    // Implement your filter logic here
    this.close();
  }
}
