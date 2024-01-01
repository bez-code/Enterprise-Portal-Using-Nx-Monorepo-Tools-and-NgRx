import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PoiModule } from '@packt/poi';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ]),
    PoiModule,
    NgChartsModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule { }
