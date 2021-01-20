import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FooterService {
    private navFooterSource = new BehaviorSubject<boolean>(false);
    
    navFooter$ = this.navFooterSource.asObservable();

    constructor(){}
    // service functions

     toDisableFooter(isTrue) {
         this.navFooterSource.next(isTrue);
     }
}