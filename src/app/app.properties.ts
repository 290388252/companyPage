
import {Injectable} from '@angular/core';

@Injectable()
export class AppProperties {
  public appUrl: string;
  public imgUrl: string;

  constructor() {
    // this.imgUrl = 'http://192.168.0.108:8769/ys_admin';
    // this.appUrl = 'http://192.168.0.108:8769/ys_admin'; // localtest
    // this.imgUrl = 'http://192.168.0.104:6662/ys_admin';
    // this.appUrl = 'http://192.168.0.104:6662/ys_admin'; // localtest
    // this.imgUrl = 'http://192.168.0.128:6662/ys_admin';
    // this.appUrl = 'http://192.168.0.128:6662/ys_admin'; // localtest
    this.imgUrl = 'http://119.23.233.123:6662/ys_admin';
    this.appUrl = 'http://119.23.233.123:6662/ys_admin'; // localtest

  }
  getUrl(): string {
    return this.appUrl;
  }
  getImgUrl(): string {
    return this.imgUrl;
  }
}


