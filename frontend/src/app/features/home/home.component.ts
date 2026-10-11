import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div class="absolute inset-0 bg-stone-100 dark:bg-zinc-900 transition-colors duration-300">
        <div class="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/85 dark:from-zinc-950 dark:via-zinc-950/85 to-transparent z-10 transition-colors duration-300"></div>
        <img src="/Images/background.jpg" alt="ARTISTIC DÉ & DÉCOR Interior Design" class="w-full h-full object-cover opacity-70 mix-blend-overlay">
      </div>
      
      <div class="container mx-auto px-4 lg:px-8 relative z-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span class="text-primary tracking-[0.25em] uppercase text-xs font-bold">Friendly Décor You Can Trust</span>
          </div>

          <h1 class="text-4xl sm:text-6xl md:text-7xl font-sans font-bold leading-tight mb-6 text-zinc-900 dark:text-white">
            ARTISTIC <br>
            <span class="text-primary italic font-light">DÉ & DÉCOR</span>
          </h1>

          <p class="text-zinc-600 dark:text-gray-300 text-lg md:text-xl mb-4 max-w-xl leading-relaxed transition-colors duration-300">
            Crafted interior experiences and turnkey décor solutions for commercial and residential spaces led by <strong>Shrutika</strong>.
          </p>

          <p class="text-xs uppercase tracking-widest text-zinc-500 dark:text-gray-400 mb-8 flex items-center gap-2">
            <span>📍 Panvel, Navi Mumbai</span>
            <span>•</span>
            <span>📞 +91 96192 68820</span>
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a routerLink="/commercial" class="btn-primary">View Portfolio</a>
            <a routerLink="/contact" class="btn-outline">Book Consultation</a>
            <a href="tel:+919619268820" class="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary transition-colors px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call +91 96192 68820</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Designer Spotlight Bar -->
    <section class="border-y border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 py-8 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left items-center">
          <!-- Item 1: Designer -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
              S
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-primary block">Interior Designer</span>
              <span class="font-bold text-zinc-900 dark:text-white text-sm">Shrutika</span>
            </div>
          </div>

          <!-- Item 2: Phone -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              📞
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-primary block">Direct Contact</span>
              <a href="tel:+919619268820" class="font-bold text-zinc-900 dark:text-white text-sm hover:text-primary transition-colors">+91 96192 68820</a>
            </div>
          </div>

          <!-- Item 3: Location -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              📍
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-primary block">Studio Address</span>
              <span class="font-medium text-zinc-700 dark:text-gray-300 text-xs">Shraddha Sankul, Panvel</span>
            </div>
          </div>

          <!-- Item 4: Verified Registration -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 block">GST Registered</span>
              <span class="font-mono text-zinc-700 dark:text-gray-300 text-xs font-semibold">27CFZPP6536C1ZU</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-3">Friendly Décor You Can Trust</h4>
          <h2 class="text-4xl md:text-5xl font-bold">Our Interior Expertise</h2>
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
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              Strategic and vibrant interior concepts for retail, workspaces, cafes, and corporate offices across Navi Mumbai and Mumbai.
            </p>
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
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              Customized home renovations, living spaces, bedrooms, and modular kitchens designed around your family lifestyle.
            </p>
            <a routerLink="/residential" class="text-primary text-sm tracking-widest uppercase font-bold hover:text-zinc-900 dark:hover:text-white transition-colors">Explore Projects &rarr;</a>
          </div>

          <!-- Service 3 -->
          <div class="card p-10 group">
            <div class="text-primary mb-6">
              <svg class="w-12 h-12 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Décor & Styling</h3>
            <p class="text-zinc-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              Careful curation of luxury lighting, wall treatments, bespoke furnishings, and accents for a finished, elegant space.
            </p>
            <a routerLink="/gallery" class="text-primary text-sm tracking-widest uppercase font-bold hover:text-zinc-900 dark:hover:text-white transition-colors">View Gallery &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Gallery Preview -->
    <section class="py-20 bg-white dark:bg-zinc-900/50 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-2">Portfolio Preview</h4>
            <h2 class="text-3xl md:text-4xl font-bold">Featured Projects & Spaces</h2>
          </div>
          <div class="flex gap-4">
            <a routerLink="/commercial" class="text-xs uppercase tracking-widest font-bold text-primary hover:underline">Commercial &rarr;</a>
            <a routerLink="/residential" class="text-xs uppercase tracking-widest font-bold text-primary hover:underline">Residential &rarr;</a>
            <a routerLink="/gallery" class="text-xs uppercase tracking-widest font-bold text-primary hover:underline">All Photos &rarr;</a>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Project 1 -->
          <div class="card group overflow-hidden">
            <div class="relative h-56 overflow-hidden">
              <img src="/Images/Living%20room%201.jpg" alt="Luxury Living Room" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <span class="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-950/80 text-primary">Panvel</span>
            </div>
            <div class="p-5">
              <span class="text-[10px] uppercase tracking-widest text-primary font-bold">Residential</span>
              <h3 class="font-bold text-base mt-1 group-hover:text-primary transition-colors">Contemporary Luxury Living</h3>
              <p class="text-xs text-zinc-500 dark:text-gray-400 mt-2 line-clamp-2">False ceiling lighting & bespoke finishes at Shraddha Sankul, Panvel.</p>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="card group overflow-hidden">
            <div class="relative h-56 overflow-hidden">
              <img src="/Images/Andheri%20Office.jpg" alt="Corporate Office" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <span class="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-950/80 text-primary">Andheri</span>
            </div>
            <div class="p-5">
              <span class="text-[10px] uppercase tracking-widest text-primary font-bold">Commercial</span>
              <h3 class="font-bold text-base mt-1 group-hover:text-primary transition-colors">Andheri Corporate Office</h3>
              <p class="text-xs text-zinc-500 dark:text-gray-400 mt-2 line-clamp-2">Collaborative workstations and executive modern cabins.</p>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="card group overflow-hidden">
            <div class="relative h-56 overflow-hidden">
              <img src="/Images/Kitchen%201.jpg" alt="Modular Kitchen" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <span class="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-950/80 text-primary">Navi Mumbai</span>
            </div>
            <div class="p-5">
              <span class="text-[10px] uppercase tracking-widest text-primary font-bold">Modular Kitchen</span>
              <h3 class="font-bold text-base mt-1 group-hover:text-primary transition-colors">Signature Modular Kitchen</h3>
              <p class="text-xs text-zinc-500 dark:text-gray-400 mt-2 line-clamp-2">Quartz stone counters with soft-close custom pantry storage.</p>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="card group overflow-hidden">
            <div class="relative h-56 overflow-hidden">
              <img src="/Images/Comerrcial%20hospital.jpg" alt="Healthcare Clinic" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <span class="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-950/80 text-primary">Healthcare</span>
            </div>
            <div class="p-5">
              <span class="text-[10px] uppercase tracking-widest text-primary font-bold">Commercial</span>
              <h3 class="font-bold text-base mt-1 group-hover:text-primary transition-colors">Specialty Healthcare Clinic</h3>
              <p class="text-xs text-zinc-500 dark:text-gray-400 mt-2 line-clamp-2">Patient-friendly modern medical and wellness reception.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Callout Banner -->
    <section class="py-16 bg-primary/10 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <span class="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Personalized Interior Experience</span>
        <h3 class="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Ready to Transform Your Space?</h3>
        <p class="text-zinc-600 dark:text-gray-300 mb-8 text-base">
          Contact Shrutika today to discuss your floor plan, styling ideas, and receive a friendly, transparent estimate.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a routerLink="/contact" class="btn-primary">Schedule Consultation</a>
          <a href="https://wa.me/919619268820?text=Hello%20Shrutika,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project" target="_blank" class="btn-outline flex items-center gap-2">
            <span>💬 Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
