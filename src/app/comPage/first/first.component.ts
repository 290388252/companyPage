import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';
import {_document} from "@angular/platform-browser/src/browser";
// import {CooperationPage} from "./cooperationPage";
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import * as $ from 'jquery';
import {error} from 'selenium-webdriver';
// import {Cooperation} from "./cooperation.form";
@Component({
  selector: 'app-firstpage',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  animations: [routerTransition()]
})

export class FirstComponent implements OnInit {
   public currentPic = 0;
   public officialArticleUrl;
   public imgUrl;
   public articleList = [];
  public articleList1 = [];
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
   this.officialArticleUrl = appProperties.getUrl() + '/officialArticle/officialList ';
   this.imgUrl = appProperties.getImgUrl() + '/articleImg/';
  }
  ngOnInit() {
    this.appService.postData(this.officialArticleUrl, {sid: 1}).subscribe(
      data => {
        console.log(data);
        for (let i = 0 ; i < 3; i++) {
          this.articleList.push(data.returnObject[i]);
        }
      },
      error1 => {
        console.log(error1.message);
      }
    );
    this.appService.postData(this.officialArticleUrl, {sid: 1}).subscribe(
      data => {
        console.log(data);
        for (let i = 0 ; i < 3; i++) {
          this.articleList1.push(data.returnObject[i]);
        }
      },
      error1 => {
        console.log(error1.message);
      }
    );
    setInterval(() => {
      const num = (this.currentPic + 1) % 2;
      this.currentPic = num;
    }, 3000);
  }
  changebanner(i) {
    this.currentPic = i;
  }
}
