import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIntroduceComponent } from './productIntroduce.component';

const routes: Routes = [
  {
    path: '', component: ProductIntroduceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductIntroduceRoutingModule {}
