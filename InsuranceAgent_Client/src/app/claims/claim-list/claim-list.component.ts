import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ClaimService } from '../claim.service';
import { Claim } from '../claim.model';
import { FilterDialogComponent } from '../../shared/components/filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, FilterDialogComponent],
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css'],
})
export class ClaimListComponent implements OnInit {
  claims: Claim[] = [];
  filteredClaims: Claim[] = [];
  claimsMockData: Claim[] = [
    {
      id: 1,
      policyNumber: 'PN123456',
      dateofLoss: new Date('2024-06-01'),
      causeOfLoss: 'Fire',
      claimAmount: 1200.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 2,
      policyNumber: 'PN123457',
      dateofLoss: new Date('2024-06-02'),
      causeOfLoss: 'Theft',
      claimAmount: 500.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 3,
      policyNumber: 'PN123458',
      dateofLoss: new Date('2024-06-03'),
      causeOfLoss: 'Flood',
      claimAmount: 800.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 4,
      policyNumber: 'PN123459',
      dateofLoss: new Date('2024-06-04'),
      causeOfLoss: 'Accident',
      claimAmount: 700.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 5,
      policyNumber: 'PN123460',
      dateofLoss: new Date('2024-06-05'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
    {
      id: 6,
      policyNumber: 'PN123461',
      dateofLoss: new Date('2024-06-06'),
      causeOfLoss: 'Fire',
      claimAmount: 1100.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 7,
      policyNumber: 'PN123462',
      dateofLoss: new Date('2024-06-07'),
      causeOfLoss: 'Theft',
      claimAmount: 600.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 8,
      policyNumber: 'PN123463',
      dateofLoss: new Date('2024-06-08'),
      causeOfLoss: 'Flood',
      claimAmount: 700.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 9,
      policyNumber: 'PN123464',
      dateofLoss: new Date('2024-06-09'),
      causeOfLoss: 'Accident',
      claimAmount: 800.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 10,
      policyNumber: 'PN123465',
      dateofLoss: new Date('2024-06-10'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
    {
      id: 11,
      policyNumber: 'PN123466',
      dateofLoss: new Date('2024-06-11'),
      causeOfLoss: 'Fire',
      claimAmount: 1200.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 12,
      policyNumber: 'PN123467',
      dateofLoss: new Date('2024-06-12'),
      causeOfLoss: 'Theft',
      claimAmount: 500.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 13,
      policyNumber: 'PN123468',
      dateofLoss: new Date('2024-06-13'),
      causeOfLoss: 'Flood',
      claimAmount: 800.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 14,
      policyNumber: 'PN123469',
      dateofLoss: new Date('2024-06-14'),
      causeOfLoss: 'Accident',
      claimAmount: 700.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 15,
      policyNumber: 'PN123470',
      dateofLoss: new Date('2024-06-15'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
    {
      id: 16,
      policyNumber: 'PN123471',
      dateofLoss: new Date('2024-06-16'),
      causeOfLoss: 'Fire',
      claimAmount: 1100.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 17,
      policyNumber: 'PN123472',
      dateofLoss: new Date('2024-06-17'),
      causeOfLoss: 'Theft',
      claimAmount: 600.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 18,
      policyNumber: 'PN123473',
      dateofLoss: new Date('2024-06-18'),
      causeOfLoss: 'Flood',
      claimAmount: 700.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 19,
      policyNumber: 'PN123474',
      dateofLoss: new Date('2024-06-19'),
      causeOfLoss: 'Accident',
      claimAmount: 800.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 20,
      policyNumber: 'PN123475',
      dateofLoss: new Date('2024-06-20'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
    {
      id: 21,
      policyNumber: 'PN123476',
      dateofLoss: new Date('2024-06-21'),
      causeOfLoss: 'Fire',
      claimAmount: 1200.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 22,
      policyNumber: 'PN123477',
      dateofLoss: new Date('2024-06-22'),
      causeOfLoss: 'Theft',
      claimAmount: 500.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 23,
      policyNumber: 'PN123478',
      dateofLoss: new Date('2024-06-23'),
      causeOfLoss: 'Flood',
      claimAmount: 800.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 24,
      policyNumber: 'PN123479',
      dateofLoss: new Date('2024-06-24'),
      causeOfLoss: 'Accident',
      claimAmount: 700.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 25,
      policyNumber: 'PN123480',
      dateofLoss: new Date('2024-06-25'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
    {
      id: 26,
      policyNumber: 'PN123481',
      dateofLoss: new Date('2024-06-26'),
      causeOfLoss: 'Fire',
      claimAmount: 1100.0,
      status: 'Pending',
      claimType: 'Property',
    },
    {
      id: 27,
      policyNumber: 'PN123482',
      dateofLoss: new Date('2024-06-27'),
      causeOfLoss: 'Theft',
      claimAmount: 600.0,
      status: 'Approved',
      claimType: 'Auto',
    },
    {
      id: 28,
      policyNumber: 'PN123483',
      dateofLoss: new Date('2024-06-28'),
      causeOfLoss: 'Flood',
      claimAmount: 700.0,
      status: 'Denied',
      claimType: 'Property',
    },
    {
      id: 29,
      policyNumber: 'PN123484',
      dateofLoss: new Date('2024-06-29'),
      causeOfLoss: 'Accident',
      claimAmount: 800.0,
      status: 'Pending',
      claimType: 'Auto',
    },
    {
      id: 30,
      policyNumber: 'PN123485',
      dateofLoss: new Date('2024-06-30'),
      causeOfLoss: 'Vandalism',
      claimAmount: 900.0,
      status: 'Approved',
      claimType: 'Property',
    },
  ];

  constructor(private claimService: ClaimService, public dialog: MatDialog) {}
  ngOnInit(): void {
    // Fetch data from service
    // this.claimService.getClaims().subscribe((data: Claim[]) => {
    //   this.claims = data;
    // });

    // Use mock data for now
    this.fetchClaims();
  }

  fetchClaims(): void {
    // Simulate an HTTP request by using setTimeout
    setTimeout(() => {
      this.claims = this.claimsMockData;
      this.filteredClaims = this.claims;
    }, 1000);
  }

  openFilterDialog(column: keyof Claim): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '250px',
      data: { filterValue: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result); // Debugging line
      if (result !== undefined) {
        this.applyFilter(column, result);
      }
    })
  }

  applyFilter(column: keyof Claim, filterValue: string): void {
    this.filteredClaims = this.claims.filter(claim =>
      claim[column].toString().toLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  }
}
