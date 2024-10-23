import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category, News, Slide } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  baseURl = 'https://api.npoint.io/';

  getSlides(): Observable<Slide[]> {
    return this.http
      .get<Slide[]>('assets/mock-data/banner.json')
      .pipe(map((res: any) => res.slides));
  }

  // getSlides(): Observable<Slide[]> {
  //   return this.http
  //     .get<Slide[]>(`${this.baseURl}fee177346e7875554413`)
  //     .pipe(map((res: any) => res.slides));
  // }

  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>(`${this.baseURl}d275425a434e02acf2f7`)
      .pipe(map((res: any) => res.News));
  }
  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.baseURl}91298d970c27e9a06518`)
      .pipe(map((res: any) => res.newsCategory));
  }
}
