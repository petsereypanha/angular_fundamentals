import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output();

  addToCart() {
    this.added.emit();
  }
}

export interface Product {
  id: number;
  title: string;
}
