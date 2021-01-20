import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { CacheService } from './cache.service';

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private baseUrl: string;

    constructor(private http: HttpClient,
                private cache: CacheService,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl+'/api/v1/en-PH';
    }

    getAll(): Observable<any> {
        const url = this.baseUrl+'/carousel';
        return this.cache.pushCache(url);
    }

    createCarousel(data):Observable<any> {
        return this.http.post(this.baseUrl+'/carousel', data);
    }

    updateCarousel(id, data): Observable<any> {
        return this.http.put(`${this.baseUrl}/carousel/${id}`,data);
      }

    getCarousels(id): Observable<any> {
        return this.cache.pushCacheShortDuration(`${this.baseUrl}/carousel/${id}`);
    }

    
}