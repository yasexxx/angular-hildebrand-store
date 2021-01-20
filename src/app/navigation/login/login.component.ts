import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './../../_services/auth.service';
import { TokenStackService } from './../../_services/token-stack.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from './../../core/header/header.component';
import { Observable, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider , GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { AssetService } from '../../_services/asset.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    HeaderComponent
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoggedIn = false;
  isLoggedFailed = false;
  errorMessage = '';
  roles: string[];
  user: SocialUser;

  loggedIn: boolean;

  isLoading: Observable<boolean> = this.authService.loading$;

  subscription$: Subscription;

  subscription2$: Subscription;

  subscription3$: Subscription;

  subscription4$: Subscription;
  loginBg: string | ArrayBuffer;
  subsAssetLogin: Subscription;
  blurred: string | ArrayBuffer;
  subsAssetBlur: Subscription;

  constructor(private authService: AuthService,
              private oAuthService: SocialAuthService,
              private tokenStack: TokenStackService,
              private fb: FormBuilder,
              private asset: AssetService,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId) {
               }

  ngOnInit(): void {
    this.subscription3$ = this.oAuthService.authState.subscribe(
      user => {
        this.user = user;
        this.loggedIn = (user != null);
        if (this.loggedIn){
          this.checkOauthApi(this.user);
        }
      }
    )
    if (isPlatformBrowser(this.platformId)){
      this.subscription$ = this.tokenStack.getToken()
      .subscribe( str => {
        if (str){
          this.isLoggedIn = true;
          this.roles = this.tokenStack.getUser().roles;
        }
      });
    }
    this.initAsset();
  }

  ngOnDestroy(): void {
    if (this.subscription$) {this.subscription$.unsubscribe(); }
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
    if (this.subscription3$) { this.subscription3$.unsubscribe(); }
    if (this.subscription4$) { this.subscription4$.unsubscribe(); }
    if(this.subsAssetLogin) { this.subsAssetLogin.unsubscribe(); }
    this.authService.ngOnDestroy();
  }

  initAsset(){
    this.subsAssetLogin = this.asset.getAssetToCache('assets/images/login.webp').subscribe(
      data => { this.loginBg = data.result; }
    );
    this.subsAssetBlur = this.asset.getAssetToCache('assets/images/blurred.webp').subscribe(
      data => { this.blurred = data.result; }
    )
  }


  checkOauthApi(user): void {
    this.subscription4$ = this.authService.socialLogin(user)
      .subscribe( res => {
        this.tokenStack.saveToken(res.accessToken);
        this.tokenStack.saveUser(res);
        this.isLoggedFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStack.getUser().roles;
        this.reloadPage();
      }, err => {
        err;
      })
  }


  onSubmit(): void {
    if (isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.authService.login(this.loginForm.value).subscribe(
        data => {
          if (!!data.accessToken){
            this.tokenStack.saveToken(data.accessToken);
            this.tokenStack.saveUser(data);
            this.isLoggedFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStack.getUser().roles;
            this.reloadPage();
          } else {
            this.errorMessage = 'Please provide a valid username and password';
            this.isLoggedFailed = true;
          }
        },
        err => {
          this.errorMessage = 'Provide a valid username and password and try again.'
          this.isLoggedFailed = true;
        }
      );
    }
  }

  reloadPage(){
    this.router.navigateByUrl('**', { skipLocationChange: true}).then( () => {
      this.router.navigate(['']);
    });
  }

  signInWithGoogle(): void {
    this.oAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFb(): void {
    this.oAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }


}
