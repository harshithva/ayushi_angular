import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  data = "any";
  data2 = "any";
  // tslint:disable-next-line: variable-name
  _url = "https://brl-apis.herokuapp.com/contact-us/";
  registerURL = "https://brl-apis.herokuapp.com/registerme/";
  constructor(private _http: HttpClient, private _http2: HttpClient) {}

  register(data) {
    return this._http.post<any>(this._url, data);
  }
  registration(data2) {
    return this._http2.post<any>(this.registerURL, data2);
  }
}
