import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    this.productService.getById(id).subscribe({
      next: (data) => {
        this.product = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du produit', err);
        this.isLoading = false;
      }
    });
  }

  handleUpdate(product: Product) {
    if (!this.product) return;
    this.productService.update(this.product.id, product).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Erreur lors de la mise à jour', err)
    });
  }
}
