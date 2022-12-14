import {Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import {NgEventBus} from "ng-event-bus";
import {TauriAdapter} from "./providers/data/tauri-adapter.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'YAKI - Yet Another Kubernetes IDE';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private eventBus: NgEventBus,
    private beService: TauriAdapter
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

}
