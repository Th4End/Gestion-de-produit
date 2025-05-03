import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading = true;
  searchTerm = '';
  sortKey: keyof Product = 'name';
  sortAsc = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur de chargement des produits', err);
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  sortBy(key: keyof Product): void {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
    }
    this.sortKey = key;

    this.filteredProducts.sort((a, b) => {
      let aVal: any;
      let bVal: any;

      switch (key) {
        case 'name':
          aVal = a.name;
          bVal = b.name;
          break;
        case 'price':
          aVal = a.price;
          bVal = b.price;
          break;
        case 'category':
          aVal = a.category;
          bVal = b.category;
          break;
        default:
          return 0;
      }

      if (aVal === undefined && bVal === undefined) return 0;
      if (aVal === undefined) {
        if (this.sortAsc) return 1;
        else return -1;
      }
      if (bVal === undefined) {
        if (this.sortAsc) return -1;
        else return 1;
      }
      if (aVal < bVal) {
        if (this.sortAsc) return -1;
        else return 1;
      }
      if (aVal > bVal) {
        if (this.sortAsc) return 1;
        else return -1;
      }
      return 0;
    });
  }
  
}
