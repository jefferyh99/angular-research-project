import { Component, OnInit } from '@angular/core';

// 导航路由
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// 处理可观察对象
import { switchMap } from 'rxjs/operators';

// angular 与浏览器打交道
import { Location } from '@angular/common';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  public Id: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
   this.route.paramMap.subscribe((params: ParamMap) => {
      this.Id = params.get('id');
   });
   }
  ngOnInit() {
  }

}
