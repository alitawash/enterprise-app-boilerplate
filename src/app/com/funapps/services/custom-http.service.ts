import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClinet: HttpClient) { }

  getReq(url, query?): Observable<any> {
    return this.httpClinet.get(`${url}${this.buildQuery(query)}`)
  }
  postReq(url, payload): Observable<any> {
    return this.httpClinet.post(url, payload)
  }
  putReq(url, payload,query? ): Observable<any> {
    return this.httpClinet.put(`${url}${this.buildQuery(query)}`, payload)
  }

  deleteReq(url, query?): Observable<any> {
    return this.httpClinet.delete(`${url}${this.buildQuery(query)}`)
  }

  buildQuery(query?) {
    if (!query) return ""
    return "?" + query.map((q) => q + "=" + query[q]).join("&")
  }
}
