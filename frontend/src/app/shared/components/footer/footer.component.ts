import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-stone-100 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900 pt-16 pb-8 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-zinc-600 dark:text-gray-400">
        <!-- Brand & Designer -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <a routerLink="/" class="flex flex-col items-center md:items-start gap-2 mb-3">
            <div class="bg-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/logo.png" alt="ARTISTIC DÉ & DÉCOR" class="w-[120%] h-[120%] object-contain scale-110">
            </div>
            <span class="text-xl font-bold font-sans tracking-wider text-primary">
              ARTISTIC DÉ & DÉCOR
            </span>
          </a>
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Friendly Décor You Can Trust
          </p>
          <p class="leading-relaxed text-xs mb-4">
            Transforming spaces into breathtaking environments with tailored interior aesthetics, premium craftsmanship, and functional elegance.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-200/80 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 text-xs">
            <span class="text-zinc-500 dark:text-gray-400">Designer:</span>
            <strong class="text-zinc-900 dark:text-white font-semibold">Shrutika Pedamkar</strong>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-5 transition-colors duration-300">Explore</h4>
          <ul class="space-y-3">
            <li><a routerLink="/" class="hover:text-primary transition-colors">Home</a></li>
            <li><a routerLink="/commercial" class="hover:text-primary transition-colors">Commercial Design</a></li>
            <li><a routerLink="/residential" class="hover:text-primary transition-colors">Residential Spaces</a></li>
            <li><a routerLink="/gallery" class="hover:text-primary transition-colors">Design Gallery</a></li>
            <li><a routerLink="/contact" class="hover:text-primary transition-colors">Get Consultation</a></li>
          </ul>
        </div>

        <!-- Contact Details -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-5 transition-colors duration-300">Contact Us</h4>
          <ul class="space-y-3 text-xs leading-relaxed">
            <li class="flex items-center justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:+919619268820" class="hover:text-primary font-bold text-zinc-800 dark:text-zinc-200 transition-colors">+91 96192 68820</a>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-2">
              <span class="text-green-500 font-bold text-sm">💬</span>
              <a href="https://wa.me/919619268820?text=Hello%20Shrutika,%20I%20would%20like%20to%20inquire%20about%20interior%20design" target="_blank" class="hover:text-primary transition-colors text-primary font-semibold">Chat on WhatsApp</a>
            </li>
            <li class="flex items-start justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary shrink-0 mt-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                FLAT NO 111, Shraddha Sankul Panvel,<br>
                Vichumbe, Navi Mumbai,<br>
                Maharashtra 410221, India
              </span>
            </li>
          </ul>
        </div>

        <!-- Registration & Verified Credentials -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-5 transition-colors duration-300">Registered Details</h4>
          <div class="bg-white dark:bg-zinc-900/80 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 space-y-2.5 text-xs">
            <div>
              <span class="text-zinc-400 block text-[10px] uppercase tracking-wider font-semibold">GSTIN</span>
              <span class="font-mono font-bold text-zinc-900 dark:text-zinc-100 select-all">27CFZPP6536C1ZU</span>
            </div>
            <div class="border-t border-gray-100 dark:border-zinc-800 pt-2">
              <span class="text-zinc-400 block text-[10px] uppercase tracking-wider font-semibold">PAN Number</span>
              <span class="font-mono font-bold text-zinc-900 dark:text-zinc-100 select-all">CFZPP6536C</span>
            </div>
            <div class="border-t border-gray-100 dark:border-zinc-800 pt-2 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 shrink-0">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              <span>Verified Business</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-900 text-center text-xs tracking-wider text-zinc-500 dark:text-zinc-500 transition-colors duration-300 flex flex-col sm:flex-row justify-between items-center container mx-auto px-4 lg:px-8 gap-3">
        <span>&copy; {{ currentYear }} ARTISTIC DÉ & DÉCOR — Friendly Décor You Can Trust.</span>
        <span>Interior Designer: <strong class="text-zinc-700 dark:text-zinc-400">Shrutika Pedamkar</strong></span>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
