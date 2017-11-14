import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Pessoa } from './pessoa.component';

@Injectable()
export class HttpPessoaService {
  constructor(private _http: Http) { }

  getPessoas(): Observable<Pessoa[]> {
    return this._http.
      get('http://localhost:8080/as/rest/pessoarest').
      map(this.extractData);
  }

  private extractData(res: Response) {
    if (res.json()['pessoa'].length > 1) {
      return res.json()['pessoa'];
    } else {
      return res.json()['pessoa'];
    }
  }

  addPessoa(pessoa: Pessoa): Observable<string> {
    const json = JSON.stringify(pessoa);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/as/rest/pessoarest',
      json, options).map(res => res.json());
  }
}
