import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SeoService {
    constructor(private meta: Meta, private title: Title){}

    changeTitle(title: string) {
        this.title.setTitle(title);
      }
    
    updateOgUrl(url: string) {
        this.meta.updateTag({ name: 'og:url', content: url })
      }
    
    updateDescription(desc: string) {
        this.meta.updateTag({ name: 'description', content: desc })
      }

    seoUpdatePage(router:Router, activatedRoute: ActivatedRoute){
      return router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
       )
       .subscribe((event) => {
         console.log(event);
         this.changeTitle(event['title']);
         this.updateOgUrl(event['ogUrl']);
         //Updating Description tag dynamically with title
         this.updateDescription(event['title'] + event['description'])
       }); 
    }
}