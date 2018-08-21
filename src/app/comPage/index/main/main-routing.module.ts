import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {OperationPageModule} from '../../operation/operation.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'first'},
      {path: 'first', loadChildren: '../../first/first.module#FirstPageModule'},
      {path: 'cooperation', loadChildren: '../../cooperation/cooperation.module#CooperationPageModule'},
      {path: 'info', loadChildren: '../../info/info.module#InfoPageModule'},
      {path: 'newcenter', loadChildren: '../../newcenter/newcenter.module#NewcenterPageModule'},
      {path: 'operation', loadChildren: '../../operation/operation.module#OperationPageModule'},
      {path: 'product', loadChildren: '../../product/product.module#ProductPageModule'},
      {path: 'articleDetails', loadChildren: '../../articleDetails/articleDetails.module#ArticleDetailsModule'},
      {path: 'joinUs', loadChildren: '../../joinUs/joinUs.module#JoinUsModule'}
      // {path: 'productIntroduce', loadChildren: '../../productIntroduce/productIntroduce.module#ProductIntroduceModule'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
