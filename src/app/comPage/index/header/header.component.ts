import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public userName: string;
    public userImg: string;
    public isSearch;
    public hidden: boolean;
    public open = true;
    constructor(private translate: TranslateService, public router: Router) {

    }

    ngOnInit() {
      console.log(window.outerWidth);
      const _this = this;
      if (window.outerWidth < 746) {
        _this.hidden = true;
      } else {
        _this.hidden = false;
        document.getElementById('header-backgroup').style.height = '100px';
      }
      this.isSearch = true;
      window.addEventListener('resize', function() {
        if (window.outerWidth < 746) {
          _this.hidden = true;
        } else {
          _this.hidden = false;
          document.getElementById('header-backgroup').style.height = '100px';
        }
      }, false);
      // console.log('message=' +  sessionStorage.userImg);
      // this.userName = sessionStorage.userName ;
      // this.userImg = 'http://pu.imquanzi.com/' + sessionStorage.userImg ;
      // console.log('message=' +  this.userImg);
     /* // const winHeight = $(document).scrollTop();
      // console.log(winHeight);
      // $(window).scroll(() => {
      //   const scrollY = $(document).scrollTop(); // 获取垂直滚动的距离，即滚动了多少
      //   if (scrollY > 150) { // 如果滚动距离大于250px则隐藏，否则删除隐藏类
      //     $('.header-title').addClass('hiddened');
      //     $('a').addClass('hiddened').removeClass('abtn');
      //   } else {
      //     $('.header-title').removeClass('hiddened');
      //     $('a').addClass('abtn').removeClass('hiddened');
      //   }
      //   if (scrollY > winHeight) { // 如果没滚动到顶部，删除显示类，否则添加显示类
      //     $('.header-title').removeClass('showed');
      //   } else {
      //     $('.header-title').addClass('showed');
      //   }
      // });*/
    }
    select(flag) {
      $('li').siblings('li').removeClass('selected');
      $(`.li${flag}`).addClass('selected');
      // $('a').siblings('a').removeClass('selecteda');
      // $(`#a${flag}`).addClass('selecteda');
    }
    selectCol(flag) {
      document.getElementById('header-backgroup').style.height = '100px';
      this.open = true;
      $('li').siblings('li').removeClass('selected-col-s');
      $(`.li${flag}`).addClass('selected-col-s');
    }
    toggle() {
      this.open = !this.open;
      if (!this.open) {
        document.getElementById('header-backgroup').style.height = '320px';
      } else {
        document.getElementById('header-backgroup').style.height = '100px';
      }
    }
}
