import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';
import {_document} from '@angular/platform-browser/src/browser';
// import {OperationPage} from './OperationPage';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import * as $ from 'jquery';
// import {Operation} from './Operation.form';
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss', '../animate/animate.min.css'],
  animations: [routerTransition()]
})

export class OperationComponent implements OnInit {
  public leaveMessageUrl;
  public userName;
  public userEmail;
  public userPhone;
  public userContent;
  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService) {
    this.leaveMessageUrl = this.appProperties.getUrl() + '/officialMessage/add';
  }
  ngOnInit() {
    $('app-slider').css('display', 'none');
    $('.content').css('margin-top', '100px');
    $('.content').css('margin-bottom', '25px');
    this.userName = undefined;
    this.userPhone = undefined;
    this.userContent = undefined;
    this.userEmail = undefined;
  }
  leaveMessage() {
    if (this.userName === undefined || this.userEmail === undefined || this.userPhone === undefined) {
      alert('请填写完整信息');
      return;
    }
    this.appService.postData(this.leaveMessageUrl, {'name': this.userName, 'mail': this.userEmail,
    'phone': this.userPhone, 'content': this.userContent}).subscribe(
      data => {
        console.log(data);
        if (data.status === 1) {
          // this.initList = data.returnObject;
          alert(data.message);
          this.userName = undefined;
          this.userPhone = undefined;
          this.userContent = undefined;
          this.userEmail = undefined;
        } else if (data.status === -1) {
          this.router.navigate(['systemAdminLogin']);
        }
      },
      error => {
        console.log(error);
      });
  }
}
