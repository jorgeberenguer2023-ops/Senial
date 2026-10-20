import { Component } from '@angular/core';
import { CarritoSignalsComponent } from '../carrito-signals/carrito-signals.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CarritoSignalsComponent],
})
export class HomePage {
  constructor() {}
}
