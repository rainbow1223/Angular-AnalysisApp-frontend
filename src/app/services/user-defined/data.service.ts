import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { ApiService } from '../api.service';

@Injectable(
  //{
  //providedIn: 'root',
//}
)
export class DataService {
   private baseUrl = Config.BASE_URL;
   
  constructor(private baseSvc:ApiService) { }

  saveQuestion(data: any): Observable<any> {
    const postData = JSON.stringify(data);
    return this.baseSvc.post(`${this.baseUrl}Analysis`,data);
  }
  getQuestion(): Observable<any> {
    return this.baseSvc.get(`${this.baseUrl}AnalysisQuestion`);
  }

  getAnalysis(articleId:any): Observable<any> {
    return this.baseSvc.get(`${this.baseUrl}Analysis/${articleId}`);
  }

  getArticleStatus(articleId:any): Observable<any> {
    return this.baseSvc.get(`${this.baseUrl}Analysis/GetArticleStatus?articleId=${articleId}`);
  }
  saveArticle(data: any): Observable<any> {
    return this.baseSvc.post(`${this.baseUrl}Analysis/SaveArticle`,data);
  }
  getArticle(): Observable<any> {
    return this.baseSvc.get(`${this.baseUrl}Analysis/GetArticle`);
  }
}
