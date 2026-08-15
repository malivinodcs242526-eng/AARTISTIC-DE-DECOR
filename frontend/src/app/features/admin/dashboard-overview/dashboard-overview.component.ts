import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { GalleryService } from '../../../core/services/gallery.service';
import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-8 transition-colors duration-300">Dashboard Overview</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <!-- Projects Stat -->
      <div class="card p-6 border-l-4 border-l-primary">
        <h4 class="text-zinc-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase mb-1 transition-colors duration-300">Total Projects</h4>
        <div class="text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ stats.projects }}</div>
      </div>
      
      <!-- Gallery Stat -->
      <div class="card p-6 border-l-4 border-l-primary">
        <h4 class="text-zinc-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase mb-1 transition-colors duration-300">Gallery Images</h4>
        <div class="text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ stats.gallery }}</div>
      </div>
      
      <!-- Unread Messages Stat -->
      <div class="card p-6 border-l-4 border-l-red-500">
        <h4 class="text-zinc-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase mb-1 transition-colors duration-300">Unread Inquiries</h4>
        <div class="text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ stats.unreadMessages }}</div>
      </div>
      
      <!-- Total Messages Stat -->
      <div class="card p-6 border-l-4 border-l-gray-400 dark:border-l-zinc-700">
        <h4 class="text-zinc-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase mb-1 transition-colors duration-300">Total Inquiries</h4>
        <div class="text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ stats.totalMessages }}</div>
      </div>
    </div>
    
    <div class="card p-8 bg-white dark:bg-zinc-900/50 text-center border-dashed border-2 border-gray-300 dark:border-zinc-800 transition-colors duration-300">
      <h2 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300">Welcome to your Admin Portal</h2>
      <p class="text-zinc-500 dark:text-gray-400 max-w-lg mx-auto transition-colors duration-300">Use the sidebar to manage your portfolio projects, upload gallery images, and read inquiries from potential clients.</p>
    </div>
  `
})
export class DashboardOverviewComponent implements OnInit {
  stats = {
    projects: 0,
    gallery: 0,
    unreadMessages: 0,
    totalMessages: 0
  };

  constructor(
    private projectService: ProjectService,
    private galleryService: GalleryService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => {
      this.stats.projects = res.count || 0;
    });
    
    this.galleryService.getImages().subscribe(res => {
      this.stats.gallery = res.count || 0;
    });

    this.messageService.getMessages().subscribe(res => {
      this.stats.totalMessages = res.count || 0;
      if (res.data && Array.isArray(res.data)) {
        this.stats.unreadMessages = res.data.filter(m => !m.isRead).length;
      }
    });
  }
}
