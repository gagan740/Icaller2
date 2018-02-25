import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

interface IList {
  listID: number;
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

  getListDataInterface(): Observable<IList[]> {
    return this.http.post(this.url + 'get-list', { skip: 0, limit: 10, sort: {'_id': 1}}).map(res => {
      const results = res['list'];
      return results;
    });
  }

}
