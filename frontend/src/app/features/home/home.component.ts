import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-stone-100 dark:bg-zinc-900 transition-colors duration-300">
        <!-- Placeholder for hero image. You should use a real image for production. -->
        <div class="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent z-10 transition-colors duration-300"></div>
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" alt="Interior Design" class="w-full h-full object-cover opacity-60 mix-blend-overlay">
      </div>
      
      <div class="container mx-auto px-4 lg:px-8 relative z-20">
        <div class="max-w-3xl">
          <h4 class="text-primary tracking-[0.3em] uppercase text-sm font-bold mb-4 ml-1">Bespoke Interior Design</h4>
          <h1 class="text-5xl md:text-7xl font-sans font-bold leading-tight mb-8">
            Redefining <br>
            <span class="text-primary italic font-light">Luxury</span> Spaces.
          </h1>
          <p class="text-zinc-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed transition-colors duration-300">
            Award-winning interior design and decoration for elite commercial and residential properties worldwide.
          </p>
          <div class="flex gap-4">
            <a routerLink="/commercial" class="btn-primary">View Portfolio</a>
            <a routerLink="/contact" class="btn-outline">Consultation</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-3">Our Expertise</h4>
          <h2 class="text-4xl md:text-5xl font-bold">What We Do</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="card p-10 group">
            <div class="text-primary mb-6">
              <svg class="w-12 h-12 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Commercial Design</h3>
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">Strategic interior design for offices, retail spaces, and hospitality that elevates brand presence and functionality.</p>
            <a routerLink="/commercial" class="text-primary text-sm tracking-widest uppercase font-bold hover:text-zinc-900 dark:hover:text-white transition-colors">Explore Projects &rarr;</a>
          </div>

          <!-- Service 2 -->
          <div class="card p-10 group">
            <div class="text-primary mb-6">
              <svg class="w-12 h-12 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Residential Design</h3>
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">Curating bespoke living spaces that reflect your personality while ensuring supreme comfort and timeless elegance.</p>
            <a routerLink="/residential" class="text-primary text-sm tracking-widest uppercase font-bold hover:text-zinc-900 dark:hover:text-white transition-colors">Explore Projects &rarr;</a>
          </div>

          <!-- Service 3 -->
          <div class="card p-10 group">
            <div class="text-primary mb-6">
              <svg class="w-12 h-12 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Decor & Styling</h3>
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">Meticulous selection of furniture, art, and accessories to provide the perfect finishing touches to any room.</p>
            <a routerLink="/gallery" class="text-primary text-sm tracking-widest uppercase font-bold hover:text-zinc-900 dark:hover:text-white transition-colors">View Gallery &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
