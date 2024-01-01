import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor.component';
import { PoiModule } from '../../../poi/src/lib/poi/poi.module';
import { PoiListComponent } from './poi-list/poi-list.component';
import { ReducerManager } from '@ngrx/store';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    VisitorComponent,
    PoiListComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([
      { path: '', component: VisitorComponent }
    ]),
    MatCardModule,
    PoiModule,
    MatCardModule
  ],
  providers: [
    ReducerManager, // Add other providers if needed
  ],
})
export class VisitorModule { }
