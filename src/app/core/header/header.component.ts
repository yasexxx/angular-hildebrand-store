import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../_services/cart.service';
import { TokenStackService } from './../../_services/token-stack.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription$ : Subscription;
  subscription2$ : Subscription;


  private roles: string[];

  isAdmin$: boolean = false;

  isLoggedIn: boolean;

  isLoading: Observable<boolean> = this.tokenStack.loadingLogOut$;

  id: string;
  userName:string;
  isHover: boolean = false;
  constructor(private tokenStack: TokenStackService,
              private router: Router,
              private cartService: CartService,
              private titleService: Title,
              @Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      this.subscription$ = this.tokenStack.getToken().subscribe(
        str => {
          this.isLoggedIn = !!(str);
          if (this.isLoggedIn) {
            const user = this.tokenStack.getUser();
            this.roles = user.roles;
            this.isAdmin$ = this.roles.includes('ROLE_ADMIN');
            this.userName = user.username;
            this.id = user.id;
          }
        },
         err => {
           err;
         }
      );
    }
  }

  ngOnDestroy(): void {
    if(this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
  }

  changeTitle(name){
    this.titleService.setTitle(name);
  }

  mouseOver() {
    if (this.isHover === false){
      this.isHover = true;
  }
  }

  mouseOut() {
    if (this.isHover === true){
      this.isHover = false;
    }
  }

  viewProfile(name) {
    this.titleService.setTitle(name);
    this.router.navigate(['user']);
  }

  viewCart(name) {
    this.titleService.setTitle(name);
    this.router.navigate(['/cart']);
  }

  viewOrder(name) {
    this.titleService.setTitle(name);
    this.router.navigate(['user/order']);
  }

  goToAdmin(){
    this.titleService.setTitle('Administration');
    this.router.navigate(['/admin'])
  }

  

  logout(): void {
    this.titleService.setTitle('Home');
    if (isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.tokenStack.logOut().subscribe(
        data => {
          if(data){
          this.cartService.clearCartLoc();
          }
        }
      );
    }
    }
}
