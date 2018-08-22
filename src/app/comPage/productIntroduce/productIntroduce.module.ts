import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductIntroduceRoutingModule } from './productIntroduce-routing.module';
import { ProductIntroduceComponent } from './productIntroduce.component';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';

@NgModule({
  imports: [
    CommonModule,
    ProductIntroduceRoutingModule,
    TranslateModule,
    NgbDropdownModule.forRoot()
  ],
  providers: [AppService, AppProperties],
  declarations: [ProductIntroduceComponent]
})
export class ProductIntroduceModule {}
