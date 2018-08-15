import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {routerTransition} from '../../router.animations';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import {JoinUsForm} from './joinUs.form';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: ' app-joinUs',
  templateUrl: './joinUs.component.html',
  styleUrls: ['./joinUs.component.scss'],
  // styleUrls: ['./vmBase.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  animations: [routerTransition()]
})
export class JoinUsComponent implements OnInit {

  private joinUsForm: JoinUsForm;


  public disable: boolean;
  public initUrl;
  public imgPath;
  public articletitle;
  public articleDate;
  public articleCont;
  public articleImg;

  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService, private routerIonfo: ActivatedRoute) {
    this.imgPath = this.appProperties.getImgUrl() + '/articleImg/';
    this.initUrl = this.appProperties.getUrl() + '';
  }

  ngOnInit() {
    this.joinUsForm = new JoinUsForm();
    this.disable = true;
    // this.oneId = this.routerIonfo.snapshot.queryParams['oneId'];
    this.getData('');

  }

  // 初始化数据;

  getData(id) {
    this.appService.postData(this.initUrl, {'id': id}).subscribe(
      data => {
        console.log(data);
        if (data.status === 1) {
          this.articletitle = data.returnObject.title;
          this.articleDate = data.returnObject.title;
          this.articleCont = data.returnObject.title;
          this.articleImg = this.imgPath + data.returnObject.url;
        } else if (data.status === -1) {
          this.router.navigate(['systemAdminLogin']);
        }
      },
      error => {
        console.log(error);
      });
  }

}
