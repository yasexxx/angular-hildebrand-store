import { CarouselService } from './../../_services/carousel.service';
import { Subscription, of, Observable } from 'rxjs';
import { ProductServiceOperation } from './../../_services/product.services';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/';
import { UserService } from './../../_services/user.service';
import { HeaderComponent } from './../header/header.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { LoaderService } from '../../_services/loader.service';
import { shareReplay } from 'rxjs/operators';
import { FooterService } from '../../_services/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HeaderComponent,
    ShoppingCartComponent
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  slideImages: any[] = null;
  paused = false;
  unpauseOnArrow = false;
  pauseOnHover = true;

  moneyBill = faMoneyBill;
  isContentRender = true;
  
  featuredProduct: any[];
  latestProduct: any[];
  topProduct:  any[];

  subscription$ : Subscription;
  subscription2$ : Subscription;
  subscription3$ : Subscription;
  subscription4$: Subscription;
  blurred: string | ArrayBuffer;
  subscriptionBlur: Subscription;
  subscriptionSeo$: Subscription;
  topArr: any[];
  featuredArr: any[];
  latestArr: any[];
  disableFoot: Observable<boolean>;
  


  constructor(private userService: UserService,
              private carouselService: CarouselService,
              private shoppingComponent: ShoppingCartComponent,
              private header: HeaderComponent,
              public footerService: FooterService,
              private productService: ProductServiceOperation) {
              }

  ngOnInit(){
    this.disableFoot = this.footerService.navFooter$;;
    this.footerService.toDisableFooter(true);
    this.shoppingComponent.ngOnInit();
    this.promCount();
    this.initApi();
  }

  initApi(){
    this.subscription4$ = this.carouselService.getAll().pipe(
      shareReplay(1)
    )
      .subscribe(
        data => {
          this.slideImages = data;
          this.checkData();
        }, err => {
          this.checkData();
        }
      )
    this.subscription$ = this.productService.getFeaturedProduct().pipe(
      shareReplay(1)
    )
    .subscribe( 
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.featuredProduct = modifiedData;
        this.checkData();
      },err => {
        this.checkData();
        }
    );
    this.subscription2$ = this.productService.getTopProduct().pipe(
      shareReplay(1)
    )
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.topProduct = modifiedData;
        this.checkData();
      },
      err => {
        this.checkData();
      }
    );
    this.subscription3$ = this.productService.getLatestProduct().pipe(
      shareReplay(1)
    )
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.latestProduct = modifiedData;
        this.checkData();
      }
    );
    this.header.ngOnInit();
      
      this.userService.getPublicContent().subscribe(
        data => {
          if(data){
            this.isContentRender = true;
          }
        },
        err => {
          this.isContentRender = false;
        }
      );
  }

  checkData(){
    if (this.latestProduct?.length > 0 && this.topProduct?.length > 0 && this.featuredProduct?.length > 0  && this.slideImages?.length > 0){
      this.footerService.toDisableFooter(false);
    }
  }

  promCount(){
    this.productService.topProductCount().then(
      (data) => { this.checkArrApi(data);
      }
    );
  }

  checkArrApi(data: any[]){
    data.forEach(element => {
      const num = this.checkLen(element.length);
      if (element.title === "Top Product"){
        this.topArr = this.pushArr(num);
      } else if (element.title === "Featured Product"){
        this.featuredArr = this.pushArr(num);
      } else if (element.title === "Latest Product"){
        this.latestArr = this.pushArr(num);
      }
    });
  }

  checkLen(len: number){
    const rem = len % 4;
    const num = len - rem;
    return num;
  }

  pushArr(num): any[]{
    let arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(index);
    }
    return arr;
  }

  typeOf(value:any) {
    return typeof value;
  };

  of(value){
    return of(value);
  };

  arrangeBy4(data) {
    const length = data.length;
    const rem = length % 4;
    data.splice(length-rem, length);
    return data;
  }

  ngOnDestroy(): void {
    if( this.subscription$) { this.subscription$.unsubscribe(); }
    if( this.subscription2$) { this.subscription2$.unsubscribe(); }
    if( this.subscription3$) { this.subscription3$.unsubscribe(); }
    if( this.subscription4$) { this.subscription4$.unsubscribe(); }
    if( this.subscriptionSeo$) { this.subscriptionSeo$.unsubscribe(); }
    this.header.ngOnDestroy();
    this.footerService.toDisableFooter(false);
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.mimetype+';base64,'+imageStr.data.toString('base64');
  }

  trackerCarousel(index, item){
    return item.name;
  }

}
