import { Component } from '@angular/core';
import {ProductDetailComponent} from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'Tablet' }
  ];
  selectedProduct: Product | undefined;

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }
}


export interface Product {
  id: number;
  title: string;
}
