import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NewcenterRoutingModule } from './newcenter-routing.module';
import { NewcenterComponent} from './newcenter.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  imports: [
    CommonModule,
    NewcenterRoutingModule,
    TranslateModule,
    FormsModule,
    PaginationModule.forRoot(),
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AppService, AppProperties],
  declarations: [NewcenterComponent]
})
export class NewcenterPageModule {}
