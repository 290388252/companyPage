import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';
import {_document} from "@angular/platform-browser/src/browser";
// import {CooperationPage} from "./cooperationPage";
import {HttpClient} from "@angular/common/http";
import {AppProperties} from "../../app.properties";
import {AppService} from "../../app-service";
import * as $ from 'jquery';
// import {Cooperation} from "./cooperation.form";
@Component({
  selector: 'app-productpage',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../animate/animate.min.css'],
  animations: [routerTransition()]
})

export class ProductComponent implements OnInit {
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
    // this.Oon = document.getElementsByClassName('on')[0];
  }
  ngOnInit() {
    /*$('app-slider').css('display', 'none');
    $('.content').css('margin-top', '100px');*/
  }
}
