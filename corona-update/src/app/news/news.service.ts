import { News } from './news.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  private url = 'https://newsapi.org/v2/everything?' +
              'q=covid-19&' +
              'sortBy=published At&' +
              'apiKey=';

  getlatestNews(): Observable<News> {
    return this.http.get<News>(this.url);
  }
}
