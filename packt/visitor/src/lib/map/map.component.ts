import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors, PoiActions } from '@packt/poi';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  poi$ = this.store.select(PoiSelectors.selectEntity)

  constructor(private store: Store) { }

  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  showInfo(marker: MapMarker , poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
    this.info?.open(marker);
  }

}
