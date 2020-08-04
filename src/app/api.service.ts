import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any> {
    return this.httpclient.get('https://brl-apis.herokuapp.com/getmemcred/?all=1')
  }
}
