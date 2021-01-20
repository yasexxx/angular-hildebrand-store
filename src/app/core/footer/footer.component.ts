import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteTitle = 'hildebrand';
  constructor(@Inject(PLATFORM_ID) private platformId:string,
              private titleService: Title,) { }

  ngOnInit(): void {
  }

  returnHome(){
    if(isPlatformBrowser(this.platformId)){
      window.scrollTo(0,0);
    }
  }

  changeTitle(name){
    this.titleService.setTitle(name);
  }

}
