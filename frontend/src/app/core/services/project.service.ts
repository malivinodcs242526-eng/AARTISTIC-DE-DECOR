import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Project {
  _id?: string;
  title: string;
  description: string;
  category: 'commercial' | 'residential';
  location?: string;
  date?: Date;
  tags?: string[];
  images: string[];
  createdAt?: Date;
}

export interface ProjectResponse {
  success: boolean;
  count?: number;
  data: Project | Project[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) { }

  getProjects(category?: string): Observable<ProjectResponse> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<ProjectResponse>(this.apiUrl, { params });
  }

  getProject(id: string): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${this.apiUrl}/${id}`);
  }

  createProject(formData: FormData): Observable<ProjectResponse> {
    return this.http.post<ProjectResponse>(this.apiUrl, formData);
  }

  updateProject(id: string, formData: FormData): Observable<ProjectResponse> {
    return this.http.put<ProjectResponse>(`${this.apiUrl}/${id}`, formData);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
