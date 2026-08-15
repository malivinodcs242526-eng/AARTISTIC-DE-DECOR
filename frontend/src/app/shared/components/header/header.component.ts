import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3">
          <div class="bg-white rounded-full shadow-lg shadow-primary/20 w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
            <img src="/assets/images/logo.png" alt="AARTISTIC DE' & DECOR" class="w-[120%] h-[120%] object-contain scale-110">
          </div>
          <span class="text-xl md:text-2xl font-bold font-sans tracking-wider text-primary">
            AARTISTIC DE' & DECOR
          </span>
        </a>

        <div class="flex items-center gap-6">
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-600 dark:text-gray-300">
            <a routerLink="/" routerLinkActive="text-primary dark:text-primary" [routerLinkActiveOptions]="{exact: true}" class="hover:text-primary dark:hover:text-primary transition-colors">Home</a>
            <a routerLink="/commercial" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Commercial</a>
            <a routerLink="/residential" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Residential</a>
            <a routerLink="/gallery" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Gallery</a>
            <a routerLink="/contact" class="btn-primary text-xs ml-4">Get a Quote</a>
          </nav>
          
          <!-- Theme Toggle -->
          <button (click)="themeService.toggleTheme()" class="text-zinc-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2 rounded-full bg-stone-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm">
            <!-- Sun Icon (shows in dark mode to switch to light) -->
            <svg *ngIf="themeService.isDark$ | async" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <!-- Moon Icon (shows in light mode to switch to dark) -->
            <svg *ngIf="!(themeService.isDark$ | async)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
          
          <!-- Mobile Menu Toggle -->
          <button class="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
}
