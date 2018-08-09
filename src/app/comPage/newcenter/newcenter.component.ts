import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../../router.animations';
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
  styleUrls: ['./newcenter.component.scss', '../animate/animate.min.css'],
  animations: [routerTransition()]
})

export class NewcenterComponent implements OnInit {
  private newcenterForm: NewcenterForm;
  // name
  public imgPath;
  // url
  public initUrl;
  // list
  public initList;
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
    this.initUrl = this.appProperties.getUrl() + '/officialArticle/officialList';
    this.imgPath = this.appProperties.getImgUrl() + '/articleImg/';
  }

  ngOnInit() {
    $('app-slider').css('display', 'none');
    $('.content').css('margin-top', '100px');
    $('.content').css('margin-bottom', '25px');
    this.nextText = '下一页';
    this.previousText = '上一页';
    this.rotate = true;
    this.getData();
  }

  select(flag) {
    $('li').siblings('li').removeClass('selectes');
    $(`.li${flag}`).addClass('selectes');
  }
// 初始化数据
  getData() {
    this.appService.postData(this.initUrl, {'sid': 9, 'pageSize': 9}).subscribe(
      data => {
        console.log(data);
        if (data.status === 1) {
          this.initList = data.returnObject;
          this.currentPage = data.currentPage;
          this.totalPage = data.totalPage;
          this.pageSize = data.pageSize;
          this.totalNum = data.total;
          this.loading = false;
          this.loadingbg = false;
          this.disable = false;
        } else if (data.status === -1) {
          this.router.navigate(['systemAdminLogin']);
        }
      },
      error => {
        console.log(error);
      });
  }
  // 页面跳转
  pageChanged(event: any): void {
    this.disable = true;
    // this.newcenterForm.currentPage = event.page;
    this.appService.postData(this.initUrl, {'sid': 9, 'pageSize': 9, 'currentPage': event.page}).subscribe(
      data => {
        console.log(data);
        if (data.status === 1) {
          this.initList = data.returnObject;
          this.currentPage = data.currentPage;
          this.totalPage = data.totalPage;
          this.pageSize = data.pageSize;
          this.totalNum = data.total;
          this.loading = false;
          this.loadingbg = false;
          this.disable = false;
        } else if (data.status === -1) {
          this.router.navigate(['systemAdminLogin']);
        }
      },
      error => {
        console.log(error);
      });
  }
}
