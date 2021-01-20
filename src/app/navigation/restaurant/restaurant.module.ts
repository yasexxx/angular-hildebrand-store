import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { RestaurantComponent } from './restaurant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RestaurantComponent
    ],
    imports: [ CommonModule, SharedModule , RestaurantRoutingModule ],
    exports: [
        RestaurantComponent
    ]
})
export class RestaurantModule {}