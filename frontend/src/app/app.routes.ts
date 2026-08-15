import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CommercialComponent } from './features/commercial/commercial.component';
import { ResidentialComponent } from './features/residential/residential.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { ContactComponent } from './features/contact/contact.component';
import { AdminLoginComponent } from './features/admin/admin-login/admin-login.component';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout.component';
import { DashboardOverviewComponent } from './features/admin/dashboard-overview/dashboard-overview.component';
import { ManageProjectsComponent } from './features/admin/manage-projects/manage-projects.component';
import { ManageGalleryComponent } from './features/admin/manage-gallery/manage-gallery.component';
import { ManageMessagesComponent } from './features/admin/manage-messages/manage-messages.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'residential', component: ResidentialComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { 
    path: 'admin', 
    component: AdminLayoutComponent, 
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardOverviewComponent },
      { path: 'projects', component: ManageProjectsComponent },
      { path: 'gallery', component: ManageGalleryComponent },
      { path: 'messages', component: ManageMessagesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
