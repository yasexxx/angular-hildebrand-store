import { SharedModule } from './../shared/shared.module';
import { ProductServiceOperation } from './../_services/product.services';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
    declarations: [
    ],
    imports: [ CommonModule, ProductRoutingModule, NgxSkeletonLoaderModule, SharedModule ],
    exports: [],
    providers: [
        ProductServiceOperation
    ],
    bootstrap:[ProductComponent]
})
export class ProductModule {}