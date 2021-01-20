import { SharedModule } from '../../../shared/shared.module';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { ProductEditComponent } from './product-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductEditRoutingModule } from './product-edit-routing.module';

@NgModule({
    declarations: [
        ProductEditComponent
    ],
    imports: [ CommonModule, ProductEditRoutingModule,  AdminSharedModule, NgbModule, SharedModule ],
    exports: []
})
export class ProductEditModule {}