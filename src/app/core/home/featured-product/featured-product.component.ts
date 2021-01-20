import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, OnDestroy, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { AssetService } from '../../../_services/asset.service';
import { LoaderService } from '../../../_services/loader.service';
import { TokenStackService } from '../../../_services/token-stack.service';
import { CartService } from './../../../_services/cart.service';
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit, OnDestroy {
  userId :string;
  @Input() featuredProduct$: [];
  @Input() toShow = false;
  @Input() extArr$: [1,2,3,4];
  blurred: string| ArrayBuffer;
  subscriptionBlur: Subscription;

  constructor(private cartService: CartService,
              private toastService: NotificationsService,
              private router: Router,
              private tokenService: TokenStackService,
              private asset: AssetService,
              @Inject(PLATFORM_ID) private platformId: string,
              private loadService: LoaderService) {
  }


  ngOnInit(): void {
    this.loadService.show();
    const user = this.tokenService.getUser();
    if (!!user){
      this.userId = user.id;
    }
    this.subscriptionBlur = this.asset.getAssetToCache('assets/images/blurred.webp').subscribe(
      data => {
        this.blurred = data.result;
      }
    )

  };

  ngOnDestroy(): void {
    this.cartService.ngOnDestroy();
    if(this.subscriptionBlur){ this.subscriptionBlur.unsubscribe(); }
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  };

  addCart(product, qty= 1, id=0) {
    this.cartService.addToCart(product = product, qty = qty, id);
    this.popToast(true, qty, product);
  };

  popToast(isTrue: boolean, quantity: number, product) {
    if (isTrue) {
      this.toastService.success(
        `${quantity} Added`,
        `${product.productName}...`
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  popToastInvalid(header: string, subject: string) {
    this.toastService.info(header, subject, {
      timeOut: 3000
    });
  }

  singleProduct(id:string) {
    if (isPlatformBrowser(this.platformId)){
      this.router.navigate(['/product/id', id]);
    }
  }

  trackerImg(index, item){
    return item.productName;
  }



}
