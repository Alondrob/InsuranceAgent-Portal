import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from '../../shared/custom-table/custom-table.component';
import { Claim } from '../claim.model';
import { CLAIM_MOCK_DATA } from '../../claim-mock-data';

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [CommonModule, CustomTableComponent],
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {
  claims: Claim[] = CLAIM_MOCK_DATA;

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
