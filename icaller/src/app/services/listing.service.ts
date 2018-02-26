import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

interface IList {
  listID: number[];
  total: number;
}

@Injectable()
export class ListingService {
  url: string = 'http://localhost:8080/api/';
  results: object;

  constructor(private http: HttpClient) { }

  getListData() {
    return this.http.post(this.url + 'get-list', { skip: 24, limit: 25, sort: {'_id': -1}});
  }

  search(term: number) {
    const promise     = new Promise((resolve, reject) => {
      const apiURL    = `${this.url}/get-list`;
      this.http.post(apiURL, { skip: 24, limit: term, sort: {'_id': -1}})
      .toPromise().then(response => {
        if (response['success'] === true) {
          this.results  = response['list'];
        } else {
          this.results  = response['message'];
        }
        resolve(this.results);
      }, msg => {
        reject(msg);
      });
    });
    return promise;
  }

  getListDataInterface(page): Observable<IList> {
    const perPage = 10;
    const limit = perPage - 1;
    const start = (page - 1) * perPage;
    // const end = start + perPage;
    return this.http.post<IList>(this.url + 'get-list', { skip: start, limit: limit, sort: {'_id': 1}}).map(res => {
      const results = res['list'];
      return {listID: results, total: 50};
    });
  }

}
