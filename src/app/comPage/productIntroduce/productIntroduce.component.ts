import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-product-introduce',
  templateUrl: './productIntroduce.component.html',
  styleUrls: ['./productIntroduce.component.scss', '../animate/animate.min.css'],
  animations: [routerTransition()]
})

export class ProductIntroduceComponent implements OnInit {
  constructor(private translate: TranslateService, public router: Router) {

  }
  ngOnInit() {}
}
