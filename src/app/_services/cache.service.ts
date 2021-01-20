import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


interface CacheModel {
    cacheUrl: string;
    expiredTime: number;
    TimeStart: number;
}

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    public cacheMapper = new Map();
    private expiredTime = 1000*30*2;
    private expiredTimeShort = 1000*45;
    private expiredTimeImg = 1000*60*60*25;
    oldTime;
    oldTime2;
    oldTime3;
    constructor(private http: HttpClient){}
    
    pushCache(url){
        const newTime = new Date().getTime();
        const productToCache = this.cacheMapper.get(url);
        if (newTime - this.oldTime > this.expiredTime ){
        this.cacheMapper.delete(url);
        }
        if (productToCache){
        return of(productToCache);
        }
        const obs = this.http.get(url).pipe(
            map( li => {
            if (!productToCache){
                this.oldTime = new Date().getTime();
                this.cacheMapper.set(url, li);
            }
            return li;
            })
        );
        return obs;
      }

    pushCacheImg(url){
        const newTime = new Date().getTime();
        const productToCache = this.cacheMapper.get(url);
        if (newTime - this.oldTime2 > this.expiredTimeImg ){
        this.cacheMapper.delete(url);
        }
        if (productToCache){
        return of(productToCache);
        }
        const obs2 = this.http.get(url, {responseType: 'blob'}).pipe(
            map( li => {
            if (!productToCache){
                this.oldTime2 = new Date().getTime();
                this.cacheMapper.set(url, li);
            }
            return li;
            })
        );
        return obs2;
    }

    pushCacheShortDuration(url){
        const newTime = new Date().getTime();
        const productToCache = this.cacheMapper.get(url);
        if (newTime - this.oldTime3 > this.expiredTimeShort ){
        this.cacheMapper.delete(url);
        }
        if (productToCache){
        return of(productToCache);
        }
        const obs2 = this.http.get(url).pipe(
            map( li => {
            if (!productToCache){
                this.oldTime3 = new Date().getTime();
                this.cacheMapper.set(url, li);
            }
            return li;
            })
        );
        return obs2;
    }

    
}