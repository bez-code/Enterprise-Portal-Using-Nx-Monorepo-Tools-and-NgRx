import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';
import { selectAllPoi } from '../../../../poi/src/lib/poi/+state/poi.selectors';

@Component({
  selector: 'packt-poi-list',
  standalone: true,
  imports: [],
  templateUrl: './poi-list.component.html',
  styleUrl: './poi-list.component.css'
})
export class PoiListComponent implements OnInit {

  pois$= this.store.dispatch(PoiSelectors.selectAllPoi)

  constructor (private store:Store){}

  ngOnInit(): void {
   this.store.dispatch(PoiActions.initPoi());
  }

}
