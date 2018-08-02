import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import {NewcenterForm} from './newcenter.form';
import * as $ from 'jquery';
// import {Cooperation} from "./cooperation.form";
@Component({
  selector: 'app-newcenterpage',
  templateUrl: './newcenter.component.html',
  styleUrls: ['./newcenter.component.scss'],
  animations: [routerTransition()]
})

export class NewcenterComponent implements OnInit {
  private newcenterForm: NewcenterForm;
  public loading: boolean;
  public loadingbg: boolean;
  public disable: boolean;
  public nextText: string;
  public previousText: string;
  public currentPage: number;
  public text;
  public rotate = true;
  public totalPage: number;
  public totalNum: number;
  public pageSize: number;
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
  }
  ngOnInit() {
    $('app-slider').css('display', 'none');
    $('.content').css('margin-top', '100px');
    $('.content').css('margin-bottom', '25px');
  }
  select(flag) {
    $('li').siblings('li').removeClass('selectes');
    $(`.li${flag}`).addClass('selectes');
  }
  pageChanged(event: any): void {
    this.loading = true;
    this.loadingbg = true;
    this.disable = true;
    // this.whWarehouseListForm.currentPage = event.page;
    // console.log(this.whWarehouseListForm.currentPage);
    // this.getData(this.whWarehouseListForm);
  }
}
