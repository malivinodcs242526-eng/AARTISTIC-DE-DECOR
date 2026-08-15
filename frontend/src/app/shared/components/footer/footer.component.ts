import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-stone-100 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900 pt-16 pb-8 transition-colors duration-300">
      <div class="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-zinc-600 dark:text-gray-400">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
          <a routerLink="/" class="flex flex-col items-center md:items-start gap-3 mb-4">
            <div class="bg-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center overflow-hidden">
              <img src="/assets/images/logo.png" alt="AARTISTIC DE' & DECOR" class="w-[120%] h-[120%] object-contain scale-110">
            </div>
            <span class="text-xl font-bold font-sans tracking-wider text-primary">
              AARTISTIC DE' & DECOR
            </span>
          </a>
          <p class="leading-relaxed max-w-xs mx-auto md:mx-0">
            Elevating spaces through visionary interior design and bespoke decor solutions for commercial and residential properties.
          </p>
        </div>

        <!-- Links -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase mb-6 transition-colors duration-300">Explore</h4>
          <ul class="space-y-4">
            <li><a routerLink="/commercial" class="hover:text-primary transition-colors">Commercial Projects</a></li>
            <li><a routerLink="/residential" class="hover:text-primary transition-colors">Residential Projects</a></li>
            <li><a routerLink="/gallery" class="hover:text-primary transition-colors">Photo Gallery</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase mb-6 transition-colors duration-300">Contact</h4>
          <ul class="space-y-4">
            <li>Email: hello&#64;aartisticdecor.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Design Avenue, Suite 100, NY</li>
          </ul>
        </div>

        <!-- Social -->
        <div class="text-center md:text-left">
          <h4 class="text-zinc-900 dark:text-white font-bold tracking-widest uppercase mb-6 transition-colors duration-300">Connect</h4>
          <div class="flex justify-center md:justify-start gap-4">
            <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary transition-all">
              FB
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary transition-all">
              IG
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary transition-all">
              IN
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-900 text-center text-xs tracking-widest uppercase text-zinc-500 dark:text-zinc-600 transition-colors duration-300">
        &copy; {{ currentYear }} AARTISTIC DE' & DECOR. All rights reserved.
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
