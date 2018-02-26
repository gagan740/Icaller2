import { Component, OnInit } from '@angular/core';
import { ListingService } from './services/listing.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public collection;
  public interfaceData;
  public p: number = 1;
  public title = 'app';
  public total: number;
  // public interfaceData  = new Observable<IList[]>;


  constructor(private _data: ListingService) { }

  ngOnInit() {
    this.listData();
    this.interfaceListData(1);
  }

  listData() {
    this._data.getListData().subscribe(res => {
      if (res['success'] === true) {
        this.collection = res['list'];
      }
    });
  }

  interfaceListData(page: number) {
    this.interfaceData = this._data.getListDataInterface(page)
    .do(res => {
      console.log(res);
      this.total = res.total;
      this.p = page;
    })
    .map(res => res.listID);
  }

  // interfaceListData(page: number) {
  //   this._data.getListDataInterface(page)
  //   .subscribe(res => {
  //     console.log(res);
  //   });
  // }

  // getPage(page: number) {
  //   this.interfaceData = this._data.getListDataInterface(page);
  // }

}
