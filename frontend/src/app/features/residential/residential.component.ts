import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../core/services/project.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-residential',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="mb-12">
        <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-2">Portfolio</h4>
        <h1 class="text-4xl md:text-5xl font-bold">Residential Projects</h1>
        <p class="text-zinc-600 dark:text-gray-400 mt-4 max-w-2xl transition-colors duration-300">Explore our exclusive residential portfolio, where we transform houses into bespoke homes tailored to personal lifestyles.</p>
      </div>

      <div *ngIf="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>

      <div *ngIf="!loading && projects.length === 0" class="text-center py-20 text-zinc-500 dark:text-gray-500">
        No residential projects found.
      </div>

      <div *ngIf="!loading && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let project of projects" class="card group cursor-pointer">
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0 bg-black/10 dark:bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img [src]="getImageUrl(project.images[0])" [alt]="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div *ngIf="project.location" class="absolute top-4 right-4 z-20 bg-white/90 dark:bg-zinc-950/80 backdrop-blur text-xs px-3 py-1 text-primary border border-primary/30 rounded-full tracking-widest uppercase transition-colors duration-300">
              {{ project.location }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-zinc-600 dark:text-gray-400 line-clamp-2 mb-4 text-sm leading-relaxed transition-colors duration-300">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of project.tags" class="text-xs bg-gray-200 dark:bg-zinc-800 text-zinc-700 dark:text-gray-300 px-2 py-1 rounded transition-colors duration-300">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ResidentialComponent implements OnInit {
  projects: Project[] = [];
  loading = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects('residential').subscribe({
      next: (res) => {
        this.projects = res.data as Project[];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getImageUrl(filename: string): string {
    if (!filename) return 'assets/placeholder.jpg';
    return `${environment.imageUrl}/${filename}`;
  }
}
