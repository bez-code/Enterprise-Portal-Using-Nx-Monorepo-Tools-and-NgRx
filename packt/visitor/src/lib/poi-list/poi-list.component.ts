import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors, PoiEntity } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrl: './poi-list.component.css'
})
export class PoiListComponent implements OnInit {

  pois$ = this.store.select(PoiSelectors.selectAllPoi)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
  }

}
