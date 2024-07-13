import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Output() closeModal = new EventEmitter<void>();

   ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.isOpen = changes['isOpen'].currentValue;
            console.log('BaseModalComponent - isOpen changed:', this.isOpen);  // Log isOpen changes

    }
  }

  // open() {
  //   this.isOpen = true;
  // }

  close() {
    this.isOpen = false;
    this.closeModal.emit();
    console.log("modal closed")
  }
}
