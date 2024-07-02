import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimListComponent } from './claims/claim-list/claim-list.component';

const routes: Routes = [
  { path: 'claims', component: ClaimListComponent },
  { path: '', redirectTo: '/claims', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

