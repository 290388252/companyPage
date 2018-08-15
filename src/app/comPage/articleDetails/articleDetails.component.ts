import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {routerTransition} from '../../router.animations';
import {HttpClient} from '@angular/common/http';
import {AppProperties} from '../../app.properties';
import {AppService} from '../../app-service';
import {ArticleDetailsForm} from './articleDetails.form';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: ' app-articleDetails',
  templateUrl: './articleDetails.component.html',
  styleUrls: ['./articleDetails.component.scss'],
  // styleUrls: ['./vmBase.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  animations: [routerTransition()]
})
export class ArticleDetailsComponent implements OnInit {

  private articleDetailsForm: ArticleDetailsForm;


  public disable: boolean;
  public initUrl;
  public imgPath;
  public articletitle;
  public articleDate;
  public articleCont;
  public articleImg;
  public id;

  constructor(private translate: TranslateService, public router: Router, private http: HttpClient,
              private appProperties: AppProperties, private appService: AppService, private routerIonfo: ActivatedRoute) {
    this.imgPath = this.appProperties.getImgUrl() + '/articleImg/';
    this.initUrl = this.appProperties.getUrl() + '/officialArticle/findDto';
  }

  ngOnInit() {
    this.articleDetailsForm = new ArticleDetailsForm();
    this.disable = true;
    this.id = this.routerIonfo.snapshot.queryParams['id'];
    console.log(this.id);
    this.getData();

  }

  // 初始化数据;

  getData() {
    this.appService.postFormData(this.initUrl, {'id': this.id}).subscribe(
      data => {
        console.log(data);
        if (data.status === 1) {
          this.articletitle = data.returnObject.title;
          this.articleDate = data.returnObject.createTime;
          this.articleCont = data.returnObject.content;
          this.articleImg = this.imgPath + data.returnObject.url;
          console.log(data.returnObject);
        } else if (data.status === -1) {
          this.router.navigate(['systemAdminLogin']);
        }
      },
      error => {
        console.log(error);
      });
  }

}
