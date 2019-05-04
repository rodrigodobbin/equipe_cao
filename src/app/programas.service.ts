import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programa } from 'src/model/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private _http: HttpClient) { }

  envia(programa) {
    return this._http.post<Programa>('http://34.201.76.22:7854/getTipo', programa);
  }
}
