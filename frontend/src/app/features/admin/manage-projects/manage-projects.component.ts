import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjectService, Project } from '../../../core/services/project.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Manage Projects</h1>
      <button (click)="toggleForm()" class="btn-primary py-2 px-6">
        {{ showForm ? 'Cancel' : 'Add New Project' }}
      </button>
    </div>

    <!-- Add Project Form -->
    <div *ngIf="showForm" class="card p-6 mb-8 border border-primary/30">
      <h2 class="text-xl font-bold mb-6 text-zinc-900 dark:text-white transition-colors duration-300">Add New Project</h2>
      <form #projectForm="ngForm" (ngSubmit)="onSubmit(projectForm)" class="space-y-4">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Title</label>
            <input type="text" name="title" ngModel required class="input-field py-2">
          </div>
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Category</label>
            <select name="category" ngModel required class="input-field py-2 bg-white dark:bg-zinc-900 transition-colors duration-300">
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Location (Optional)</label>
            <input type="text" name="location" ngModel class="input-field py-2">
          </div>
          <div>
            <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Tags (Comma separated)</label>
            <input type="text" name="tags" ngModel class="input-field py-2" placeholder="Modern, Minimalist, Office">
          </div>
        </div>

        <div>
          <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Description</label>
          <textarea name="description" ngModel required rows="3" class="input-field py-2"></textarea>
        </div>

        <div>
          <label class="block text-sm text-zinc-700 dark:text-gray-300 mb-1 transition-colors duration-300">Images (Select multiple)</label>
          <input type="file" (change)="onFileSelect($event)" multiple accept="image/*" class="w-full text-zinc-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white dark:file:text-black hover:file:bg-primary/90 transition-colors duration-300">
        </div>

        <div *ngIf="errorMsg" class="text-red-500 dark:text-red-400 text-sm transition-colors duration-300">{{ errorMsg }}</div>

        <button type="submit" [disabled]="!projectForm.valid || isSubmitting" class="btn-primary py-2 w-full mt-4">
          {{ isSubmitting ? 'Saving...' : 'Save Project' }}
        </button>
      </form>
    </div>

    <!-- Projects List -->
    <div class="card overflow-hidden">
      <table class="w-full text-left text-sm text-zinc-600 dark:text-gray-400 transition-colors duration-300">
        <thead class="text-xs uppercase bg-gray-100 dark:bg-zinc-900 text-zinc-700 dark:text-gray-300 transition-colors duration-300">
          <tr>
            <th class="px-6 py-4">Image</th>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4">Category</th>
            <th class="px-6 py-4">Location</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of projects" class="border-b border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
            <td class="px-6 py-4">
              <img [src]="getImageUrl(p.images[0])" class="w-16 h-12 object-cover rounded shadow-sm">
            </td>
            <td class="px-6 py-4 font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ p.title }}</td>
            <td class="px-6 py-4 capitalize">{{ p.category }}</td>
            <td class="px-6 py-4">{{ p.location || '-' }}</td>
            <td class="px-6 py-4 text-right">
              <button (click)="deleteProject(p._id!)" class="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-300">Delete</button>
            </td>
          </tr>
          <tr *ngIf="projects.length === 0">
            <td colspan="5" class="px-6 py-8 text-center text-zinc-500 dark:text-gray-500 transition-colors duration-300">No projects found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class ManageProjectsComponent implements OnInit {
  projects: Project[] = [];
  showForm = false;
  isSubmitting = false;
  selectedFiles: File[] = [];
  errorMsg = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res.data as Project[];
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.selectedFiles = [];
    this.errorMsg = '';
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    if (this.selectedFiles.length === 0) {
      this.errorMsg = 'Please select at least one image.';
      return;
    }

    this.isSubmitting = true;
    this.errorMsg = '';

    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('category', form.value.category);
    formData.append('description', form.value.description);
    if (form.value.location) formData.append('location', form.value.location);
    if (form.value.tags) formData.append('tags', form.value.tags);

    for (let file of this.selectedFiles) {
      formData.append('images', file);
    }

    this.projectService.createProject(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.toggleForm();
        this.loadProjects();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMsg = err.error?.message || 'Error saving project';
      }
    });
  }

  deleteProject(id: string) {
    if(confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.loadProjects();
      });
    }
  }

  getImageUrl(filename: string): string {
    return `${environment.imageUrl}/${filename}`;
  }
}
