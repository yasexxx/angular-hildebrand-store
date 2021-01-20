import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        LoginRoutingModule,
        LazyLoadImageModule,
        SharedModule
    ],
    exports: []
})
export class LoginModule {}