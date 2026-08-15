import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService, GalleryImage } from '../../core/services/gallery.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-2">Inspiration</h4>
          <h1 class="text-4xl md:text-5xl font-bold">Photo Gallery</h1>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap gap-2">
          <button *ngFor="let cat of categories" 
                  (click)="filterCategory(cat)"
                  class="px-4 py-2 text-xs tracking-widest uppercase rounded-full border transition-all"
                  [ngClass]="activeCategory === cat ? 'bg-primary text-white dark:text-black border-primary font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)] dark:shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'bg-transparent text-zinc-600 dark:text-gray-400 border-gray-300 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-primary/50 hover:text-zinc-900 dark:hover:text-white'">
            {{ cat }}
          </button>
        </div>
      </div>

      <div *ngIf="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>

      <div *ngIf="!loading && images.length === 0" class="text-center py-20 text-zinc-500 dark:text-gray-500">
        No images found in this category.
      </div>

      <div *ngIf="!loading && images.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div *ngFor="let image of images" class="relative group overflow-hidden rounded-xl bg-gray-200 dark:bg-zinc-900 aspect-square cursor-pointer" (click)="openModal(image)">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-4">
            <span class="text-primary text-xs uppercase tracking-widest font-bold">{{ image.category }}</span>
            <span class="text-white font-medium truncate" *ngIf="image.title">{{ image.title }}</span>
          </div>
          <img [src]="getImageUrl(image.filename)" [alt]="image.title || image.category" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div *ngIf="selectedImage" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10" (click)="closeModal()">
        <button class="absolute top-6 right-6 text-white hover:text-primary transition-colors" (click)="closeModal()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img [src]="getImageUrl(selectedImage.filename)" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" (click)="$event.stopPropagation()">
        <div class="absolute bottom-10 left-10 text-white" (click)="$event.stopPropagation()">
          <div class="text-primary tracking-widest uppercase text-sm font-bold">{{ selectedImage.category }}</div>
          <div class="text-2xl mt-1" *ngIf="selectedImage.title">{{ selectedImage.title }}</div>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  images: GalleryImage[] = [];
  allImages: GalleryImage[] = [];
  loading = true;
  
  categories = ['All', 'Living Room', 'Kitchen', 'Office', 'Commercial', 'Residential', 'Other'];
  activeCategory = 'All';
  selectedImage: GalleryImage | null = null;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getImages().subscribe({
      next: (res) => {
        this.allImages = res.data as GalleryImage[];
        this.images = [...this.allImages];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  filterCategory(cat: string) {
    this.activeCategory = cat;
    if (cat === 'All') {
      this.images = [...this.allImages];
    } else {
      this.images = this.allImages.filter(img => img.category === cat);
    }
  }

  getImageUrl(filename: string): string {
    return `${environment.imageUrl}/${filename}`;
  }

  openModal(image: GalleryImage) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
