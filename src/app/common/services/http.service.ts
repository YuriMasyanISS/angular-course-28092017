import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService extends HttpClient {

  public constructor(
    handler: HttpHandler,
    @Inject(BASE_URL_TOKEN) private _baseUrl: string,
  ) {
    super(handler);
  }


  public customRequest<T>(path: string): Observable<T> {
    return this.get<T>(`${this._baseUrl}${path}`);
  }

}
