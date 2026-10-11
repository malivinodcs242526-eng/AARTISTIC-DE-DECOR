import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface GalleryImage {
  _id?: string;
  filename: string;
  category: string;
  title?: string;
  createdAt?: Date;
}

export interface GalleryResponse {
  success: boolean;
  count?: number;
  data: GalleryImage | GalleryImage[];
}

export const DEFAULT_GALLERY_IMAGES: GalleryImage[] = [
  // Living Room
  { filename: '/Images/Living room 1.jpg', category: 'Living Room', title: 'Luxury Living Room with Cove Lighting' },
  { filename: '/Images/Living room 2.jpg', category: 'Living Room', title: 'Minimalist Modern Living Lounge' },
  { filename: '/Images/Living room 3.jpg', category: 'Living Room', title: 'Warm Family Lounge with Custom Millwork' },
  { filename: '/Images/Living room 4.jpg', category: 'Living Room', title: 'Spacious Open-Concept Living Room' },
  { filename: '/Images/Living room 5.jpg', category: 'Living Room', title: 'Urban Apartment Living & Dining Styling' },

  // Kitchen
  { filename: '/Images/Kitchen 1.jpg', category: 'Kitchen', title: 'Contemporary Modular Kitchen with Quartz Counter' },
  { filename: '/Images/Kitchen 2 4.jpg', category: 'Kitchen', title: 'Open-Concept Designer Kitchen' },
  { filename: '/Images/kitchen 3.jpg', category: 'Kitchen', title: 'Parallel Layout Kitchen with Task Lighting' },
  { filename: '/Images/Kitchen 4.jpg', category: 'Kitchen', title: 'Minimalist Kitchen Cabinets & Storage' },
  { filename: '/Images/Kitchen 5.jpg', category: 'Kitchen', title: 'L-Shaped Luxury Modular Kitchen' },

  // Office
  { filename: '/Images/Andheri Office.jpg', category: 'Office', title: 'Corporate Workstations & Glass Cabins' },
  { filename: '/Images/Office 2.jpg', category: 'Office', title: 'Creative Studio Office Interior' },
  { filename: '/Images/Office 3.jpg', category: 'Office', title: 'Executive Management Cabin' },
  { filename: '/Images/Office 4.jpg', category: 'Office', title: 'Collaborative Open Office Space' },
  { filename: '/Images/Office 5.jpg', category: 'Office', title: 'Private Consultation & Meeting Room' },

  // Commercial
  { filename: '/Images/Cmmercial 3.jpg', category: 'Commercial', title: 'Executive Conference Room & Boardroom' },
  { filename: '/Images/Comerrcial hospital.jpg', category: 'Commercial', title: 'Healthcare Clinic Interior Design' },
  { filename: '/Images/Commercial 2.jpg', category: 'Commercial', title: 'Boutique Commercial & Retail Space' },
  { filename: '/Images/Commercial 4.jpg', category: 'Commercial', title: 'Modern Commercial Reception & Lobby' }
];

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = `${environment.apiUrl}/gallery`;

  constructor(private http: HttpClient) { }

  getImages(category?: string): Observable<GalleryResponse> {
    let params = new HttpParams();
    if (category && category !== 'All') {
      params = params.set('category', category);
    }

    return this.http.get<GalleryResponse>(this.apiUrl, { params }).pipe(
      map(res => {
        const items = Array.isArray(res.data) ? res.data : [];
        if (items.length === 0) {
          // If remote cloud backend database has no images yet, serve the project images bundled in repository
          const filtered = (!category || category === 'All')
            ? DEFAULT_GALLERY_IMAGES
            : DEFAULT_GALLERY_IMAGES.filter(i => i.category.toLowerCase() === category.toLowerCase());
          return {
            success: true,
            count: filtered.length,
            data: filtered
          };
        }
        return res;
      }),
      catchError(() => {
        // Fallback gracefully on network error or when Render free tier is spinning up
        const filtered = (!category || category === 'All')
          ? DEFAULT_GALLERY_IMAGES
          : DEFAULT_GALLERY_IMAGES.filter(i => i.category.toLowerCase() === category.toLowerCase());
        return of({
          success: true,
          count: filtered.length,
          data: filtered
        });
      })
    );
  }

  uploadImage(formData: FormData): Observable<GalleryResponse> {
    return this.http.post<GalleryResponse>(this.apiUrl, formData);
  }

  deleteImage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
