import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;
  isEnriching = false;
  enrichedDescription: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null && !isNaN(id)) {
      this.productService.getById(id).subscribe({
        next: (data) => {
          this.product = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.log('Erreur de chargement du produit', err);
          this.isLoading = false;
        }
      });
    } else {
      console.log('ID de produit invalide');
      this.isLoading = false;
    }
  }

  enrichProduct(): void {
    if (!this.product || this.product.id === undefined) return;
  
    this.isEnriching = true;
    this.productService.enrichDescription(this.product.id).subscribe({
      next: (updatedProduct) => {
        this.enrichedDescription = updatedProduct.description;
        this.isEnriching = false;
      },
      error: (err) => {
        console.log('Erreur lors de l’enrichissement', err);
        this.isEnriching = false;
      }
    });
  }
  
}
