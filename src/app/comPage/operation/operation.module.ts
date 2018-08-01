import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';

@NgModule({
  imports: [
    CommonModule,
    OperationRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [OperationComponent]
})
export class OperationPageModule {}
