import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import {OperationPageModule} from '../../operation/operation.module';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
           { path: '', redirectTo: 'first' },
          { path: 'first', loadChildren: '../../first/first.module#FirstPageModule' },
          { path: 'cooperation', loadChildren: '../../cooperation/cooperation.module#CooperationPageModule' },
           { path: 'info', loadChildren: '../../info/info.module#InfoPageModule' },
          { path: 'newcenter', loadChildren: '../../newcenter/newcenter.module#NewcenterPageModule' },
          { path: 'operation', loadChildren: '../../operation/operation.module#OperationPageModule' },
           { path: 'product', loadChildren: '../../product/product.module#ProductPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
