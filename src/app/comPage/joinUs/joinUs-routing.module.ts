import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinUsComponent} from './joinUs.component';

const routes: Routes = [
  {
    path: '', component: JoinUsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinUsRoutingModule {}
