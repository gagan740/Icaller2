import { Component, OnInit } from '@angular/core';
import { ListingService } from './services/listing.service';
import { Observable } from 'rxjs/Observable';

interface IList {
  listID: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public collection;
  public interfaceData: Observable<IList[]>;
  public page: number = 1;
  public title = 'app';
  // public interfaceData  = new Observable<IList[]>;


  constructor(private _data: ListingService) { }

  ngOnInit() {
    this.listData();
    this.interfaceListData();
  }

  listData() {
    this._data.getListData().subscribe(res => {
      if (res['success'] === true) {
        this.collection = res['list'];
      }
    });
  }

  interfaceListData() {
    this.interfaceData = this._data.getListDataInterface();
  }

}
