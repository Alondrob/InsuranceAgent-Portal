import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Necessary for ngModel
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Claim } from '../claim.model';
import { CLAIM_MOCK_DATA } from '../../claim-mock-data'; // Correct path

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,  // Include FormsModule
    TableModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {
  claims: Claim[] = [];
  filteredClaims: Claim[] = [];
  searchValue: string = ''; // Initialize searchValue to an empty string
  statuses: { label: string, value: string }[] = []; // Initialize statuses with an appropriate type
  loading: boolean = true;

  ngOnInit(): void {
    this.fetchClaims();
    this.statuses = [
      { label: 'Pending', value: 'Pending' },
      { label: 'Approved', value: 'Approved' },
      { label: 'Denied', value: 'Denied' }
    ];
  }

  fetchClaims(): void {
    setTimeout(() => {
      this.claims = CLAIM_MOCK_DATA;
      this.filteredClaims = this.claims;
      this.loading = false;
    }, 1000);
  }

  clear(table: any) {
    table.clear();
    this.searchValue = '';
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Approved':
        return 'success';
      case 'Denied':
        return 'danger';
      default:
        return 'info';
    }
  }
}



