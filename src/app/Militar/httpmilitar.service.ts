import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Militar } from './militar.component';

@Injectable()
export class HttpMilitarService {
  constructor(private _http: Http) { }

  getMilitares(): Observable<Militar[]> {
    return this._http.
      get('http://localhost:8080/as/rest/militarrest').
      map(this.extractData);
  }

  private extractData(res: Response) {
    if (res.json()['militar'].length > 1) {
      return res.json()['militar'];
    } else {
      return res.json()['militar'];
    }
  }

  addMilitar(militar: Militar): Observable<string> {
    const json = JSON.stringify(militar);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/as/rest/militarrest',
      json, options).map(res => res.json());
  }
}
