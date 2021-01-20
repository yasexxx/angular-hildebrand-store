import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { MainSharedModule } from '../../main-shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [ 
        CommonModule,
        SignUpRoutingModule,
        SharedModule,
        LazyLoadImageModule,
        NgxIntlTelInputModule,
        MainSharedModule
    ],
    exports: []
})
export class SignUpModule {}