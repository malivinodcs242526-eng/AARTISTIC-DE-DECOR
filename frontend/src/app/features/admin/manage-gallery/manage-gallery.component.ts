import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { GalleryService, GalleryImage } from '../../../core/services/gallery.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-manage-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Manage Gallery</h1>
      <button (click)="toggleForm()" class="btn-primary py-2 px-6">
        {{ showForm ? 'Cancel' : 'Upload Image' }}
      </button>
    </div>

    <!-- Upload Form -->
    <div *ngIf="showForm" class="card p-6 mb-8 border border-primary/30">
      <h2 class="text-xl font-bold mb-6 text-zinc-900 dark:text-white transition-colors duration-300">Upload New Image</h2>
      <form #galleryForm="ngForm" (ngSubmit)="onSubmit(galleryForm)" class="space-y-4">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Title (Optional)</label>
            <input type="text" name="title" ngModel class="input-field py-2">
          </div>
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Category</label>
            <select name="category" ngModel required class="input-field py-2 bg-white dark:bg-zinc-900 transition-colors duration-300">
              <option value="Living Room">Living Room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Office">Office</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Image File</label>
          <input type="file" (change)="onFileSelect($event)" accept="image/*" class="w-full text-zinc-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white dark:file:text-black hover:file:bg-primary/90 transition-colors duration-300">
        </div>

        <div *ngIf="errorMsg" class="text-red-500 dark:text-red-400 text-sm transition-colors duration-300">{{ errorMsg }}</div>

        <button type="submit" [disabled]="!galleryForm.valid || isSubmitting" class="btn-primary py-2 w-full mt-4">
          {{ isSubmitting ? 'Uploading...' : 'Upload Image' }}
        </button>
      </form>
    </div>

    <!-- Gallery List -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div *ngFor="let img of images" class="relative group rounded-xl overflow-hidden bg-gray-200 dark:bg-zinc-900 aspect-square transition-colors duration-300">
        <img [src]="getImageUrl(img.filename)" class="w-full h-full object-cover">
        
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
          <span class="text-primary text-xs uppercase font-bold text-center mb-1">{{ img.category }}</span>
          <span class="text-white text-sm text-center mb-4 truncate w-full">{{ img.title || 'Untitled' }}</span>
          
          <button (click)="deleteImage(img._id!)" class="text-red-400 bg-red-400/20 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition-colors text-xs uppercase tracking-wider font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
    
    <div *ngIf="images.length === 0 && !showForm" class="text-center py-12 text-zinc-500 dark:text-gray-500 transition-colors duration-300">
      No images in the gallery yet.
    </div>
  `
})
export class ManageGalleryComponent implements OnInit {
  images: GalleryImage[] = [];
  showForm = false;
  isSubmitting = false;
  selectedFile: File | null = null;
  errorMsg = '';

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.galleryService.getImages().subscribe(res => {
      this.images = res.data as GalleryImage[];
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.selectedFile = null;
    this.errorMsg = '';
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    if (!this.selectedFile) {
      this.errorMsg = 'Please select an image file.';
      return;
    }

    this.isSubmitting = true;
    this.errorMsg = '';

    const formData = new FormData();
    formData.append('category', form.value.category);
    if (form.value.title) formData.append('title', form.value.title);
    formData.append('image', this.selectedFile);

    this.galleryService.uploadImage(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.toggleForm();
        this.loadImages();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMsg = err.error?.message || 'Error uploading image';
      }
    });
  }

  deleteImage(id: string) {
    if(confirm('Are you sure you want to delete this image?')) {
      this.galleryService.deleteImage(id).subscribe(() => {
        this.loadImages();
      });
    }
  }

  getImageUrl(filename: string): string {
    return `${environment.imageUrl}/${filename}`;
  }
}
