import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttractInvestmentComponent } from './attractInvestment.component';

const routes: Routes = [
  {
    path: '', component: AttractInvestmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractInvestmentRoutingModule {}
