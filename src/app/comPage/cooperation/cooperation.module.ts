import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CooperationRoutingModule } from './cooperation-routing.module';
import { CooperationComponent } from './cooperation.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CooperationRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [CooperationComponent]
})
export class CooperationPageModule {}
