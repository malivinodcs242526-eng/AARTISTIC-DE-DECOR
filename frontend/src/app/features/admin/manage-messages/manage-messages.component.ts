import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MessageService, Message } from '../../../core/services/message.service';

@Component({
  selector: 'app-manage-messages',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Customer Inquiries</h1>
      <p class="text-zinc-600 dark:text-gray-400 mt-2 transition-colors duration-300">Manage messages received from the contact form.</p>
    </div>

    <!-- Messages List -->
    <div class="space-y-4">
      <div *ngFor="let msg of messages" class="card overflow-hidden border-l-4 transition-colors duration-300" [ngClass]="msg.isRead ? 'border-l-gray-300 dark:border-l-zinc-700' : 'border-l-primary'">
        
        <!-- Header / Summary -->
        <div class="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors duration-300" (click)="toggleExpand(msg)">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-1">
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white transition-colors duration-300">{{ msg.name }}</h3>
              <span *ngIf="!msg.isRead" class="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">New</span>
            </div>
            <div class="text-sm text-zinc-500 dark:text-gray-400 flex flex-wrap gap-x-6 gap-y-2 transition-colors duration-300">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                {{ msg.email }}
              </span>
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                {{ msg.phone }}
              </span>
              <span class="flex items-center gap-1 text-primary" *ngIf="msg.projectType">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>
                {{ msg.projectType }}
              </span>
            </div>
          </div>
          
          <div class="flex items-center justify-between md:justify-end gap-6 text-sm text-zinc-500 dark:text-gray-500 transition-colors duration-300">
            <span>{{ msg.createdAt | date:'mediumDate' }}</span>
            <button (click)="$event.stopPropagation(); deleteMessage(msg._id!)" class="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 p-2 border border-transparent hover:border-red-400/30 rounded transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
            </button>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div *ngIf="expandedId === msg._id" class="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 transition-colors duration-300">
          <h4 class="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-gray-500 mb-3 transition-colors duration-300">Message Content</h4>
          <p class="text-zinc-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap bg-white dark:bg-zinc-950 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 transition-colors duration-300">{{ msg.message }}</p>
          
          <div class="mt-4 flex gap-4">
            <a [href]="'mailto:' + msg.email" class="btn-outline py-2 px-4 text-sm inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
              Reply via Email
            </a>
          </div>
        </div>

      </div>
      
      <div *ngIf="messages.length === 0" class="text-center py-12 text-zinc-500 dark:text-gray-500 transition-colors duration-300">
        No messages found.
      </div>
    </div>
  `
})
export class ManageMessagesComponent implements OnInit {
  messages: Message[] = [];
  expandedId: string | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessages().subscribe(res => {
      this.messages = res.data as Message[];
    });
  }

  toggleExpand(msg: Message) {
    if (this.expandedId === msg._id) {
      this.expandedId = null;
    } else {
      this.expandedId = msg._id || null;
      if (!msg.isRead && msg._id) {
        this.markAsRead(msg._id);
        msg.isRead = true;
      }
    }
  }

  markAsRead(id: string) {
    this.messageService.markAsRead(id).subscribe();
  }

  deleteMessage(id: string) {
    if(confirm('Are you sure you want to delete this message?')) {
      this.messageService.deleteMessage(id).subscribe(() => {
        this.loadMessages();
      });
    }
  }
}
