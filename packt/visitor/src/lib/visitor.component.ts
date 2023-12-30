import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'packt-visitor',
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css',
})

export class VisitorComponent {
  isHandset$!: Observable<boolean>;
}
