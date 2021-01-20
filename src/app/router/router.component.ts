import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoaderService } from '../_services/loader.service';
import { slideInAnimation } from '../animation';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './../core/home/home.component';
import { FooterService } from '../_services/footer.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-router',
  template: `
    <style>
      .hr-style{
        padding: 4.5rem 0;
      }

      .set-height-1 {
        min-height: 100vh;
      }

      @media (max-width:992px){
        .hr-style{
          padding: 5rem 0;
        }
      }

      @media (max-width:768px){
        .hr-style{
          padding: 3.5rem 0;
        }
      }

      }
    </style>
      <!-- Routing Navigation : App header ,navbar, & footer -->
                <div class="fixed-top">
                  <app-header></app-header>
                  <app-navbar></app-navbar>
                  <app-progress-loader></app-progress-loader>
                </div>
                <hr class="hr-style"/>
                <div class="set-height-1" [@routeAnimations]="animateRoute(outlet)">
                  <router-outlet #outlet="outlet"></router-outlet>
                </div>
                <div *ngIf="!(disFooter|async)">
                  <app-footer></app-footer>
                </div>
                `,
    animations: [
      slideInAnimation
    ]
})
export class RouterComponent implements OnInit {

  loading: Observable<boolean>;
  disFooter: Observable<boolean>;
  constructor(public loaderService: LoaderService,
              public footerService: FooterService) { }

  ngOnInit(): void {
    this.disFooter = this.footerService.navFooter$.pipe(
      debounceTime(300)
    );
  }

  animateRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
