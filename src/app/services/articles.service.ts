import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }

  getTechnology(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/everything?q=technology&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }

  getTopTechnology(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }

  getSport(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&category=sport&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }

  getEntertainment(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&category=entertainment&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }

  getHealth(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&category=health&apiKey=dc702f1720c8406e8088df1ce9d60ed9');
  }
}
