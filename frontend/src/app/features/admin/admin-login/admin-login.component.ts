import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-stone-50 dark:bg-zinc-950 flex items-center justify-center p-4 transition-colors duration-300">
      <div class="card p-8 md:p-12 w-full max-w-md shadow-2xl">
        <div class="text-center mb-8 flex flex-col items-center">
          <div class="bg-white rounded-full shadow-lg shadow-primary/20 w-24 h-24 flex items-center justify-center overflow-hidden mb-4 shrink-0">
            <img src="/assets/images/logo.png" alt="AARTISTIC DE' & DECOR" class="w-[120%] h-[120%] object-contain scale-110">
          </div>
          <h2 class="text-2xl font-bold font-sans tracking-wider text-primary mb-2">
            AARTISTIC DE' & DECOR
          </h2>
          <p class="text-zinc-500 dark:text-gray-400 text-sm tracking-widest uppercase transition-colors duration-300">Admin Portal</p>
        </div>

        <div *ngIf="errorMessage" class="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm text-center">
          {{ errorMessage }}
        </div>

        <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input type="email" name="email" ngModel required class="input-field" placeholder="admin@example.com">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input type="password" name="password" ngModel required class="input-field" placeholder="••••••••">
          </div>
          <button type="submit" [disabled]="!loginForm.valid || isLoading" class="btn-primary w-full flex justify-center items-center gap-2">
            <span *ngIf="!isLoading">Secure Login</span>
            <span *ngIf="isLoading" class="flex items-center gap-2">
              <div class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              Authenticating...
            </span>
          </button>
        </form>
        
        <div class="mt-8 text-center">
          <a href="/" class="text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">&larr; Back to Website</a>
        </div>
      </div>
    </div>
  `
})
export class AdminLoginComponent {
  isLoading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = form.value;
    
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Invalid login credentials.';
      }
    });
  }
}
