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
      <div class="container mx-auto px-4 lg:px-8 py-3.5 flex justify-between items-center">
        <!-- Logo & Brand Name -->
        <a routerLink="/" class="flex items-center gap-3">
          <div class="bg-white rounded-full shadow-lg shadow-primary/20 w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
            <img src="/assets/images/logo.png" alt="ARTISTIC DÉ & DÉCOR" class="w-[120%] h-[120%] object-contain scale-110">
          </div>
          <div class="flex flex-col">
            <span class="text-xl md:text-2xl font-bold font-sans tracking-wider text-primary leading-tight">
              ARTISTIC DÉ & DÉCOR
            </span>
            <span class="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-500 dark:text-zinc-400">
              Friendly Décor You Can Trust
            </span>
          </div>
        </a>

        <div class="flex items-center gap-6">
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-7 text-sm font-medium uppercase tracking-widest text-zinc-600 dark:text-gray-300">
            <a routerLink="/" routerLinkActive="text-primary dark:text-primary" [routerLinkActiveOptions]="{exact: true}" class="hover:text-primary dark:hover:text-primary transition-colors">Home</a>
            <a routerLink="/commercial" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Commercial</a>
            <a routerLink="/residential" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Residential</a>
            <a routerLink="/gallery" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Gallery</a>
            <a routerLink="/contact" routerLinkActive="text-primary dark:text-primary" class="hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
            
            <!-- Quick Call Button -->
            <a href="tel:+919619268820" class="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-100 hover:text-primary dark:hover:text-primary transition-colors bg-stone-100 dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+91 96192 68820</span>
            </a>

            <a routerLink="/contact" class="btn-primary text-xs py-2 px-5">Get Quote</a>
          </nav>
          
          <!-- Theme Toggle -->
          <button (click)="themeService.toggleTheme()" aria-label="Toggle Theme" class="text-zinc-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2 rounded-full bg-stone-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm">
            <!-- Sun Icon (shows in dark mode to switch to light) -->
            <svg *ngIf="themeService.isDark$ | async" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <!-- Moon Icon (shows in light mode to switch to dark) -->
            <svg *ngIf="!(themeService.isDark$ | async)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
          
          <!-- Mobile Contact Button -->
          <a href="tel:+919619268820" class="md:hidden text-primary p-2 rounded-full bg-stone-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800" aria-label="Call Now">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
}
