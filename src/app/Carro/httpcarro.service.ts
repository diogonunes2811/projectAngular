import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Carro } from './carro.component';

@Injectable()
export class HttpCarroService {
  constructor(private _http: Http) { }

  getCarros(): Observable<Carro[]> {
    return this._http.
      get('http://localhost:8080/as/rest/carrorest').
      map(this.extractData);
  }

  private extractData(res: Response) {
    if (res.json() != null) {
      if (res.json()['carro'].length > 1) {
        return res.json()['carro'];
      } else {
        return [res.json().carro];
      }
    }else {
      return null;
    }
  }

  addCarro(carro: Carro): Observable<string> {
    const json = JSON.stringify(carro);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/as/rest/carrorest',
      json, options).map(res => res.json());
  }

  updateCarro(carro: Carro): Observable<string> {
    const json = JSON.stringify(carro);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/as/rest/carrorest/updateCarroRest',
      json, options).map(res => res.json());
  }

  delCarro(carro: Carro): Observable<string> {
//    alert(carro.id);
    const json = JSON.stringify(carro);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/as/rest/carrorest/delCarroRest',
      json, options).map(res => res.json());
  }
}
