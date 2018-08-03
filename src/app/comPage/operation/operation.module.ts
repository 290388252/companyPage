import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    OperationRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [OperationComponent]
})
export class OperationPageModule {}
