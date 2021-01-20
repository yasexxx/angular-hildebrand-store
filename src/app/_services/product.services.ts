import { ProductInfo } from './update-product.service';
import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';


@Injectable(
  {
    providedIn: 'root'
  }
)


export class ProductServiceOperation {
    public baseUrl: string;
    public responseCache;

    constructor(private http: HttpClient,
                private cache: CacheService,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl+'/api/v1/en-PH/products';
        this.responseCache = this.cache.cacheMapper;
    }

    

    getAll(): Observable<any> {
        return this.cache.pushCache(this.baseUrl).pipe(
          map( (data) => {
                  for (const i in data) {
                    if (Object.prototype.hasOwnProperty.call(data, i)) {
                      const modData = data[i];
                      if (modData.isPublished === true){
                        modData.isPublished = 'Published'
                      }
                      if(!!modData.post){
                        if (modData.post.topProduct === true ){
                          modData.post.topProduct = 'Top Product';
                        } if ( modData.post.featuredProduct === true ){
                          modData.post.featuredProduct = 'Featured Product';
                        } if ( modData.post.latestProduct === true ){
                          modData.post.latestProduct = 'Latest Product';
                        } if ( modData.post.restaurantProduct === true ){
                          modData.post.restaurantProduct = 'Restaurant Product';
                        } if ( modData.post.supermarketProduct === true ){
                          modData.post.supermarketProduct = 'Supermarket Product';
                        } if ( modData.post.other === true){
                          modData.post.other = 'Other';
                        }
                      }
                      if (!!modData.options){
                        if (modData.options.restaurantFood === true ){
                          modData.options.restaurantFood = 'Restaurant Food';
                        } if ( modData.options.restaurantDrink === true ){
                          modData.options.restaurantDrink = 'Restaurant Drink';
                        } if ( modData.options.restaurantDessert === true ){
                          modData.options.restaurantDessert = 'Restaurant Dessert';
                        } if ( modData.options.supermarketGrocery === true ){
                          modData.options.supermarketGrocery = 'Supermarket Grocery';
                        } if ( modData.options.supermarketVegetable === true ){
                          modData.options.supermarketVegetable = 'Supermarket Vegetable';
                        } if ( modData.options.supermarketCannedGoods === true){
                          modData.options.supermarketCannedGoods = 'Supermarket Canned Goods';
                        }}}}
                  return data;
                  }));
    }

    topProductCount(): Promise<any> {
      return this.http.get(`${this.baseUrl}/display/top-products/length`).toPromise();
    }

    getTopProduct(): Observable<any> {
        const url = this.baseUrl+'/display/top-products';
        return this.cache.pushCache(url);
    }
        

    getFeaturedProduct(): Observable<any> {
      const url = this.baseUrl+'/display/featured-products';
      return this.cache.pushCache(url);
    }

    getLatestProduct(): Observable<any> {
      const url = this.baseUrl+'/display/latest-products';
      return this.cache.pushCache(url);
    }

    getSupermarketProduct(): Observable<any> {
      const url = this.baseUrl+'/display/supermarket-products';
      return this.cache.pushCache(url);
    }

    getRestaurantProduct(): Observable<any> {
      const url = this.baseUrl+'/display/restaurant-products';
      return this.cache.pushCache(url);
    }

    getOtherProduct(): Observable<any> {
      const url = this.baseUrl+'/display/other-products';
      return this.cache.pushCache(url);
    }

    getRestaurantFood(): Observable<any> {
      const url = this.baseUrl+'/display/restaurant-products/food';
      return this.cache.pushCache(url);
    }

    getRestaurantDrink(): Observable<any> {
      const url = this.baseUrl+'/display/restaurant-products/drink';
      return this.cache.pushCache(url);
    }

    getRestaurantDessert(): Observable<any> {
      const url = this.baseUrl+'/display/restaurant-products/dessert';
      return this.cache.pushCache(url);
    }

    getSupermarketGrocery(): Observable<any> {
      const url = this.baseUrl+'/display/supermarket-products/grocery';
      return this.cache.pushCache(url);
    }

    getSupermarketVegetable(): Observable<any> {
      const url = this.baseUrl+'/display/supermarket-products/vegetable';
      return this.cache.pushCache(url);
    }

    getSupermarketCannedGoods(): Observable<any> {
      const url = this.baseUrl+'/display/supermarket-products/canned-goods';
      return this.cache.pushCache(url);
    }

    get(id): Observable<any> {
        return this.http.get<ProductInfo>(`${this.baseUrl}/${id}`);
      }

    update(id, data): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`,data);

      }

    delete(id): Observable<any> {
        return this.http.delete(this.baseUrl+`/${id}`);
      }

    deleteAll(): Observable<any> {
        return this.http.delete(this.baseUrl);
      }

    findByTitle(name):Observable<any> {
        return this.http.get(`${this.baseUrl}?productName=${name}`);
      }

    create(data): Observable<any> {
        return this.http.post<any>(this.baseUrl, data);
      }


}
