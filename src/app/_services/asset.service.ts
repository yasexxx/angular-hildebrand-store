import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CacheService } from './cache.service';



@Injectable({
    providedIn: 'root'
})
export class AssetService {

    assetBase64: string | ArrayBuffer;

    constructor(private cache: CacheService){}


    getAssetToCache(url, readAs = 'readAsDataURL'): Observable<any>{
        return this.cache.pushCacheImg(url).pipe(
            mergeMap( li => {
                return this.assetImgLoader(li, readAs);
            })
        )
    }

    assetImgLoader (file = {}, method): Promise<any>{
        const reader = new FileReader()
        return new Promise((resolve, reject) => {
          reader[method](file);
          reader.onload = () => {
            resolve(reader)
          }
          reader.onerror = (error) => reject(error)
        });
      }


}