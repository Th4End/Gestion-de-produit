import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  handleCreate(product: Product) {
    this.productService.create(product).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Erreur lors de la création', err)
    });
  }
}
