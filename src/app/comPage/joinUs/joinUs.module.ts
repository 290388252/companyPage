import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {BsLocaleService, ModalModule} from 'ngx-bootstrap';
import {AppService} from '../../app-service';
import {AppProperties} from '../../app.properties';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { zhCnLocale } from 'ngx-bootstrap/locale';
import { JoinUsRoutingModule} from './joinUs-routing.module';
import {JoinUsComponent} from './joinUs.component';

defineLocale('zh-cn', zhCnLocale);
@NgModule({
  imports: [
    CommonModule,
    JoinUsRoutingModule,
    TranslateModule,
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    NgbDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AppService, AppProperties],
  declarations: [JoinUsComponent]
})
export class JoinUsModule {
  // constructor(private localeService: BsLocaleService) {
  //   this.localeService.use('zh-cn');
  // }
}
