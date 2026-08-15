import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = `${environment.apiUrl}/gallery`;

  constructor(private http: HttpClient) { }

  getImages(category?: string): Observable<GalleryResponse> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<GalleryResponse>(this.apiUrl, { params });
  }

  uploadImage(formData: FormData): Observable<GalleryResponse> {
    return this.http.post<GalleryResponse>(this.apiUrl, formData);
  }

  deleteImage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
