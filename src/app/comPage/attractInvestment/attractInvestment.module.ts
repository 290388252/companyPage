import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AttractInvestmentRoutingModule } from './attractInvestment-routing.module';
import { AttractInvestmentComponent } from './attractInvestment.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AttractInvestmentRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [AttractInvestmentComponent]
})
export class AttractInvestmentModule {}
