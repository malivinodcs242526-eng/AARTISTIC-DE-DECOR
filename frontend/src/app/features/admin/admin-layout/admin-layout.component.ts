import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-stone-50 dark:bg-zinc-950 flex transition-colors duration-300">
      <!-- Sidebar -->
      <aside class="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col hidden md:flex transition-colors duration-300">
        <div class="h-20 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800 transition-colors duration-300">
          <a routerLink="/admin/dashboard" class="flex items-center gap-3">
            <div class="bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/assets/images/logo.png" alt="AARTISTIC DE' & DECOR" class="w-[120%] h-[120%] object-contain scale-110">
            </div>
            <span class="text-lg font-bold font-sans tracking-wider text-primary truncate" title="AARTISTIC DE' & DECOR">
              AARTISTIC DE'
            </span>
          </a>
        </div>
        
        <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p class="px-2 text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 mt-2">Management</p>
          
          <a routerLink="/admin/dashboard" routerLinkActive="bg-primary/10 text-primary border-r-2 border-primary" [routerLinkActiveOptions]="{exact: true}" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
            Dashboard
          </a>
          
          <a routerLink="/admin/projects" routerLinkActive="bg-primary/10 text-primary border-r-2 border-primary" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.8182857" /></svg>
            Projects
          </a>
          
          <a routerLink="/admin/gallery" routerLinkActive="bg-primary/10 text-primary border-r-2 border-primary" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
            Gallery
          </a>
          
          <a routerLink="/admin/messages" routerLinkActive="bg-primary/10 text-primary border-r-2 border-primary" class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Inquiries
          </a>
        </nav>
        
        <div class="p-4 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
          <button (click)="logout()" class="flex items-center gap-3 px-4 py-3 w-full text-left text-zinc-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
            Logout
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 flex flex-col min-w-0">
        <!-- Topbar -->
        <header class="h-20 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between px-6 lg:px-10 transition-colors duration-300">
          <div class="flex items-center gap-4">
            <button class="md:hidden text-zinc-600 dark:text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Admin Dashboard</h2>
          </div>
          <button (click)="logout()" class="text-sm font-semibold tracking-widest uppercase text-zinc-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 transition-colors flex items-center gap-2">
            <span class="text-sm text-zinc-600 dark:text-gray-400 transition-colors duration-300">{{ (authService.currentUser$ | async)?.email }}</span>
            <div class="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold font-sans">
              A
            </div>
          </button>
        </header>
        
        <div class="flex-1 overflow-y-auto p-8 bg-stone-100 dark:bg-zinc-950/50 transition-colors duration-300">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class AdminLayoutComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}
