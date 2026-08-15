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
        <h4 class="text-primary tracking-widest uppercase text-xs font-bold mb-2">Get in touch</h4>
        <h1 class="text-4xl md:text-5xl font-bold">Start Your Project</h1>
        <p class="text-zinc-600 dark:text-gray-400 mt-4 transition-colors duration-300">We'd love to hear about your vision. Fill out the form below and our design team will get back to you shortly.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Form -->
        <div class="card p-8 md:p-12 shadow-2xl shadow-primary/5">
          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <div *ngIf="submitSuccess" class="mb-8 p-4 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded-lg flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 shrink-0 mt-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-bold">Message Sent Successfully!</h4>
                <p class="text-sm mt-1 opacity-80">Thank you for reaching out. We will get back to you within 24 hours.</p>
              </div>
            </div>

            <div *ngIf="submitError" class="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg">
              {{ submitError }}
            </div>

            <div class="space-y-6" *ngIf="!submitSuccess">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Full Name *</label>
                  <input type="text" name="name" ngModel required class="input-field" placeholder="John Doe" #name="ngModel">
                  <div *ngIf="name.invalid && (name.dirty || name.touched)" class="text-red-500 text-xs mt-1">Name is required</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Email Address *</label>
                  <input type="email" name="email" ngModel required email class="input-field" placeholder="john@example.com" #email="ngModel">
                  <div *ngIf="email.invalid && (email.dirty || email.touched)" class="text-red-500 text-xs mt-1">Valid email is required</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Phone Number *</label>
                  <input type="tel" name="phone" ngModel required class="input-field" placeholder="+1 (555) 000-0000" #phone="ngModel">
                  <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="text-red-500 text-xs mt-1">Phone is required</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Project Type</label>
                  <select name="projectType" ngModel class="input-field appearance-none bg-white dark:bg-zinc-900 transition-colors duration-300">
                    <option value="" disabled selected>Select a type...</option>
                    <option value="Commercial">Commercial Design</option>
                    <option value="Residential">Residential Design</option>
                    <option value="Decor">Decor & Styling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-zinc-700 dark:text-gray-300 mb-2 transition-colors duration-300">Your Message *</label>
                <textarea name="message" ngModel required rows="5" class="input-field resize-none" placeholder="Tell us about your project requirements..." #message="ngModel"></textarea>
                <div *ngIf="message.invalid && (message.dirty || message.touched)" class="text-red-500 text-xs mt-1">Message is required</div>
              </div>

              <button type="submit" [disabled]="!contactForm.valid || isSubmitting" class="btn-primary w-full flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <span *ngIf="!isSubmitting">Send Inquiry</span>
                <span *ngIf="isSubmitting" class="flex items-center gap-2">
                  <div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-12">
          <!-- Info blocks -->
          <div>
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            <div class="space-y-6 text-zinc-700 dark:text-gray-300 transition-colors duration-300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h5 class="font-bold text-zinc-900 dark:text-white transition-colors duration-300">Office Location</h5>
                  <p class="mt-1">123 Design Avenue, Suite 100<br>New York, NY 10001</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h5 class="font-bold text-zinc-900 dark:text-white transition-colors duration-300">Phone & WhatsApp</h5>
                  <p class="mt-1">+1 (555) 123-4567</p>
                  <a href="https://wa.me/15551234567" target="_blank" class="text-primary text-sm font-bold hover:underline mt-1 inline-block">Chat on WhatsApp &rarr;</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h5 class="font-bold text-zinc-900 dark:text-white transition-colors duration-300">Email Address</h5>
                  <p class="mt-1">hello&#64;aartisticdecor.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps Embed Placeholder -->
          <div class="w-full h-64 bg-gray-200 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-300 dark:border-zinc-800 transition-colors duration-300">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1692222000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="dark:grayscale dark:contrast-125 dark:opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"></iframe>
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
        this.submitError = 'Failed to send message. Please try again later or contact us directly via email.';
      }
    });
  }
}
