import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="mb-12 text-center max-w-2xl mx-auto">
        <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-2">Friendly Décor You Can Trust</h4>
        <h1 class="text-4xl md:text-5xl font-bold">Contact Our Studio</h1>
        <p class="text-zinc-600 dark:text-gray-400 mt-4 transition-colors duration-300">
          Connect directly with Lead Interior Designer <strong>Omkar Pedamkar</strong> to discuss your commercial or residential interior styling.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Form -->
        <div class="card p-8 md:p-12 shadow-2xl shadow-primary/5">
          <h3 class="text-2xl font-bold mb-2">Send an Inquiry</h3>
          <p class="text-sm text-zinc-500 dark:text-gray-400 mb-8">We usually respond within a few hours.</p>

          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <div *ngIf="submitSuccess" class="mb-8 p-4 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded-lg flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 shrink-0 mt-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-bold">Message Sent Successfully!</h4>
                <p class="text-sm mt-1 opacity-80">Thank you for reaching out to Omkar Pedamkar. We will get in touch with you shortly.</p>
              </div>
            </div>

            <div *ngIf="submitError" class="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg">
              {{ submitError }}
            </div>

            <div class="space-y-6" *ngIf="!submitSuccess">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Full Name *</label>
                  <input type="text" name="name" ngModel required class="input-field" placeholder="Your name" #name="ngModel">
                  <div *ngIf="name.invalid && (name.dirty || name.touched)" class="text-red-500 text-xs mt-1">Name is required</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Email Address *</label>
                  <input type="email" name="email" ngModel required email class="input-field" placeholder="yourname@gmail.com" #email="ngModel">
                  <div *ngIf="email.invalid && (email.dirty || email.touched)" class="text-red-500 text-xs mt-1">Valid email is required</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Phone Number *</label>
                  <input type="tel" name="phone" ngModel required class="input-field" placeholder="e.g. 7977015165" #phone="ngModel">
                  <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="text-red-500 text-xs mt-1">Phone is required</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Project Type</label>
                  <select name="projectType" ngModel class="input-field appearance-none bg-white dark:bg-zinc-900 transition-colors duration-300">
                    <option value="" disabled selected>Select a type...</option>
                    <option value="Residential">Residential Interior</option>
                    <option value="Commercial">Commercial / Office</option>
                    <option value="Decor">Decor & Styling</option>
                    <option value="Modular Kitchen">Modular Kitchen & Living</option>
                    <option value="Other">Other Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Your Message *</label>
                <textarea name="message" ngModel required rows="5" class="input-field resize-none" placeholder="Tell us about your home/office design vision, layout, or timeline..." #message="ngModel"></textarea>
                <div *ngIf="message.invalid && (message.dirty || message.touched)" class="text-red-500 text-xs mt-1">Message is required</div>
              </div>

              <button type="submit" [disabled]="!contactForm.valid || isSubmitting" class="btn-primary w-full flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <span *ngIf="!isSubmitting">Send Consultation Request</span>
                <span *ngIf="isSubmitting" class="flex items-center gap-2">
                  <div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Info & Verification -->
        <div class="space-y-8">
          <!-- Info blocks -->
          <div>
            <h3 class="text-2xl font-bold mb-6">Direct Studio Information</h3>
            <div class="space-y-6 text-zinc-700 dark:text-gray-300 transition-colors duration-300">
              <!-- Lead Designer Block -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <div class="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0 text-xl font-bold">
                  OP
                </div>
                <div>
                  <span class="text-xs font-bold tracking-widest uppercase text-primary">Lead Interior Designer</span>
                  <h4 class="text-xl font-bold text-zinc-900 dark:text-white mt-0.5">Omkar Pedamkar</h4>
                  <p class="text-xs text-zinc-500 dark:text-gray-400 mt-1">Expert in contemporary residential & commercial interior aesthetics.</p>
                </div>
              </div>

              <!-- Phone & WhatsApp -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h5 class="font-bold text-zinc-900 dark:text-white transition-colors duration-300">Direct Contact & WhatsApp</h5>
                  <p class="mt-1">
                    <a href="tel:7977015165" class="text-lg font-bold hover:text-primary transition-colors text-zinc-900 dark:text-white">+91 7977015165</a>
                  </p>
                  <a href="https://wa.me/917977015165?text=Hello%20Omkar,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services" target="_blank" class="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline mt-1.5">
                    <span>Chat with Omkar on WhatsApp</span> &rarr;
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h5 class="font-bold text-zinc-900 dark:text-white transition-colors duration-300">Studio Address</h5>
                  <p class="mt-1 leading-relaxed">
                    FLAT NO 111, Shraddha Sankul Panvel,<br>
                    Vichumbe, Navi Mumbai,<br>
                    Maharashtra 410221, India
                  </p>
                </div>
              </div>

              <!-- Official Tax / Registration Details -->
              <div class="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm">
                <div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-zinc-800">
                  <h5 class="font-bold text-sm uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                    <span class="text-primary">✦</span> Registered Business Credentials
                  </h5>
                  <span class="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div class="p-3 rounded-lg bg-stone-50 dark:bg-zinc-950/60 border border-gray-200 dark:border-zinc-800/80">
                    <span class="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase font-bold tracking-widest mb-1">GSTIN Number</span>
                    <span class="font-mono font-bold text-zinc-900 dark:text-zinc-100 text-sm select-all">27CFZPP6536C1ZU</span>
                  </div>
                  <div class="p-3 rounded-lg bg-stone-50 dark:bg-zinc-950/60 border border-gray-200 dark:border-zinc-800/80">
                    <span class="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase font-bold tracking-widest mb-1">PAN Card Number</span>
                    <span class="font-mono font-bold text-zinc-900 dark:text-zinc-100 text-sm select-all">CFZPP6536C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps Embed for Panvel, Navi Mumbai -->
          <div class="w-full h-64 bg-gray-200 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-300 dark:border-zinc-800 shadow-inner">
            <iframe 
              src="https://maps.google.com/maps?q=Shraddha+Sankul,+Vichumbe,+Panvel,+Navi+Mumbai,+Maharashtra+410221&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade" 
              class="dark:grayscale dark:contrast-125 dark:opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.submitError = '';
    
    this.messageService.submitMessage(form.value).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        form.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.isSubmitting = false;
        this.submitError = 'Failed to send message. Please try again or reach out directly at 7977015165.';
      }
    });
  }
}
