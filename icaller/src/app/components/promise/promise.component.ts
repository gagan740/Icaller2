import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  public fullList: object;
  constructor(private _data: ListingService) { }

  ngOnInit() {
  }

  doSearch(term: number) {
    const promoseData = this._data.search(term);
    promoseData
    .then(success => this.fullList = success)
    .catch(error => console.log(error));
  }
}
