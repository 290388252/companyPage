import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [MainComponent, HeaderComponent, SliderComponent, FooterComponent]
})
export class MainModule {}
