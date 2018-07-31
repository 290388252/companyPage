import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {CKEditorModule} from 'ng2-ckeditor';
const routes: Routes = [/*
    { path: '**', redirectTo: 'not-found' }*/
    { path: '', redirectTo: '/comPageMain/first', pathMatch: 'full' },
    { path: 'comPageMain', loadChildren: './comPage/index/main/main.module#MainModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
