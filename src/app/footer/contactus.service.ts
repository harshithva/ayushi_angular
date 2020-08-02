import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  data = "any";
  _url = "https://brl-apis.herokuapp.com/send-mail/";
  constructor(private _http: HttpClient) {}

  register(data) {
    return this._http.post<any>(this._url, data);
  }
}
