import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';
// import {CooperationPage} from "./cooperationPage";
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  animations: [routerTransition()]
})

export class FirstComponent implements OnInit {
   public currentPic = 0;
   public officialArticleUrl;
   public officialHomeListUrl;
   public imgUrl;
   public articleList = [];
  public articleList1 = [];
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
   this.officialArticleUrl = appProperties.getUrl() + '/officialArticle/officialList ';
   this.officialHomeListUrl = appProperties.getUrl() + '/officialArticle/officialHomeList';
   this.imgUrl = appProperties.getImgUrl() + '/articleImg/';
  }
  ngOnInit() {
    this.appService.postData(this.officialArticleUrl, {sid: 7}).subscribe(
      data => {
        console.log(data);
        if (data.returnObject.length >= 3) {
          for (let i = 0; i < 3; i++) {
            this.articleList.push(data.returnObject[i]);
          }
        }else {
        this.articleList = data.returnObject;
        }
      },
      error1 => {
      console.log(error1.message);
      }
    );
    this.appService.postData(this.officialHomeListUrl, {sid: 8}).subscribe(
      data => {
        console.log(data);
        if (data.returnObject.length >= 3) {
          for (let i = 0; i < 3; i++) {
            this.articleList1.push(data.returnObject[i]);
          }
        }else {
          this.articleList1 = data.returnObject;
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
  toProduct() {
    this.router.navigate(['comPageMain/product']);
  }
}
