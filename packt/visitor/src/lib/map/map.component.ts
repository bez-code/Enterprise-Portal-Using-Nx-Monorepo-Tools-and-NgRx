import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

poi$ = this.store.select (PoiSelectors.selectEntity)

constructor (private store:Store){}

}
