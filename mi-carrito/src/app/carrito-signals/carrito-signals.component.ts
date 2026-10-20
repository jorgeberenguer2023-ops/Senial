import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-carrito-signals',
  templateUrl: './carrito-signals.component.html',
  styleUrls: ['./carrito-signals.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonBadge,
  ],
})
export class CarritoSignalsComponent {
  public productos = signal<Producto[]>([
    { id: 1, nombre: 'Licencia IDE', precio: 89 },
    { id: 2, nombre: 'Teclado Mecánico', precio: 120 },
  ]);

  public precioTotal = computed(() =>
    this.productos().reduce((total, prod) => total + prod.precio, 0),
  );

  constructor() {
    effect(() => {
      console.log(
        `[Persistencia] Estado actual del carrito guardado. Items: ${this.productos().length}`,
      );
    });
  }

  public agregarProductoAleatorio(): void {
    const nuevoId = Math.floor(Math.random() * 1000) + 3;
    const nuevoProducto: Producto = {
      id: nuevoId,
      nombre: `Monitor ${nuevoId}`,
      precio: 250,
    };

    this.productos.update((estadoAnterior) => [...estadoAnterior, nuevoProducto]);
  }

  public eliminarProducto(id: number): void {
    this.productos.update((estadoAnterior) =>
      estadoAnterior.filter((p) => p.id !== id),
    );
  }
}
