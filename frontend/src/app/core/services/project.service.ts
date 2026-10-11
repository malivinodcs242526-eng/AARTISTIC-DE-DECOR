import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

export const DEFAULT_PROJECTS: Project[] = [
  // Commercial Projects
  {
    title: 'Andheri Corporate Headquarters',
    description: 'Bespoke corporate workstation and collaborative office interior tailored for high-productivity teams with modern glass partitions and ergonomic styling.',
    category: 'commercial',
    location: 'Andheri East, Mumbai',
    tags: ['Corporate', 'Office', 'Modern'],
    images: ['/Images/Andheri Office.jpg']
  },
  {
    title: 'Specialty Healthcare & Clinic Interior',
    description: 'Soothing, hygienic, and modern clinic design combining patient comfort with functional clinical workflow and warm illumination.',
    category: 'commercial',
    location: 'Navi Mumbai',
    tags: ['Healthcare', 'Clinic', 'Commercial'],
    images: ['/Images/Comerrcial hospital.jpg']
  },
  {
    title: 'Luxe Retail & Commercial Hub',
    description: 'High-end retail storefront and showroom space featuring strategic display lighting, premium finishes, and customer-first circulation.',
    category: 'commercial',
    location: 'Vashi, Navi Mumbai',
    tags: ['Retail', 'Commercial', 'Showroom'],
    images: ['/Images/Commercial 2.jpg']
  },
  {
    title: 'Executive Boardroom & Conference Suite',
    description: 'Sophisticated acoustic conference room and executive lounge featuring luxury wood panelling, integrated AV wiring, and leadership boardroom setup.',
    category: 'commercial',
    location: 'BKC, Mumbai',
    tags: ['Executive', 'Conference', 'Boardroom'],
    images: ['/Images/Cmmercial 3.jpg']
  },
  {
    title: 'Prime Commercial Complex & Reception',
    description: 'Striking commercial entrance lobby and reception area creating an impactful first impression for visitors and clients.',
    category: 'commercial',
    location: 'Panvel, Navi Mumbai',
    tags: ['Reception', 'Commercial', 'Panvel'],
    images: ['/Images/Commercial 4.jpg']
  },
  {
    title: 'Creative Studio & Collaborative Workspace',
    description: 'Dynamic open-plan workspace designed with ergonomic zoning, natural light optimization, and contemporary artistic styling.',
    category: 'commercial',
    location: 'Airoli, Navi Mumbai',
    tags: ['Workspace', 'Studio', 'Modern'],
    images: ['/Images/Office 2.jpg', '/Images/Office 3.jpg']
  },
  {
    title: 'Private Executive Chambers & Meeting Suites',
    description: 'Tailored managerial suites with customized executive desks, bookshelf accents, and ambient recessed lighting.',
    category: 'commercial',
    location: 'Panvel, Navi Mumbai',
    tags: ['Executive', 'Office', 'Panvel'],
    images: ['/Images/Office 4.jpg', '/Images/Office 5.jpg']
  },

  // Residential Projects
  {
    title: 'Contemporary Luxury Living Hall',
    description: 'Spacious living room concept featuring bespoke false ceiling lights, textured accent wall styling, and plush comfortable seating.',
    category: 'residential',
    location: 'Shraddha Sankul, Panvel',
    tags: ['Living Room', 'Luxury', 'Panvel'],
    images: ['/Images/Living room 1.jpg']
  },
  {
    title: 'Minimalist Grand Living Suite',
    description: 'Open living and lounge space designed with soothing neutral palettes, subtle warm tones, and contemporary decor elements.',
    category: 'residential',
    location: 'Kharghar, Navi Mumbai',
    tags: ['Living Room', 'Minimalist', 'Modern'],
    images: ['/Images/Living room 2.jpg']
  },
  {
    title: 'Bespoke Family Living & Media Lounge',
    description: 'Warm family living room with integrated entertainment unit, custom millwork, cove lighting, and welcoming texture harmony.',
    category: 'residential',
    location: 'Seawoods, Navi Mumbai',
    tags: ['Living Room', 'Family', 'Ambient'],
    images: ['/Images/Living room 3.jpg', '/Images/Living room 4.jpg']
  },
  {
    title: 'Chic Urban Living & Dining Space',
    description: 'Modern apartment living space with seamless indoor flow, dining nook, and artful decorative accents tailored for urban lifestyle.',
    category: 'residential',
    location: 'Nerul, Navi Mumbai',
    tags: ['Living Room', 'Apartment', 'Urban'],
    images: ['/Images/Living room 5.jpg']
  },
  {
    title: 'Signature Modular Kitchen',
    description: 'High-efficiency modular kitchen equipped with quartz countertops, soft-close hardware, chimney ventilation, and optimized pantry storage.',
    category: 'residential',
    location: 'Panvel, Navi Mumbai',
    tags: ['Kitchen', 'Modular', 'Storage'],
    images: ['/Images/Kitchen 1.jpg']
  },
  {
    title: 'Chef\'s Parallel Modular Kitchen',
    description: 'Parallel kitchen layout designed for effortless food preparation with integrated appliances, scratch-resistant cabinets, and task lighting.',
    category: 'residential',
    location: 'Kharghar, Navi Mumbai',
    tags: ['Kitchen', 'Parallel', 'Lighting'],
    images: ['/Images/Kitchen 2 4.jpg', '/Images/kitchen 3.jpg']
  },
  {
    title: 'L-Shaped Designer Kitchen & Breakfast Counter',
    description: 'Sleek L-shaped modular kitchen featuring glossy anti-scratch finishes, smart pull-out organizers, and durable granite surfaces.',
    category: 'residential',
    location: 'Belapur, Navi Mumbai',
    tags: ['Kitchen', 'L-Shaped', 'Designer'],
    images: ['/Images/Kitchen 4.jpg', '/Images/Kitchen 5.jpg']
  }
];

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

    return this.http.get<ProjectResponse>(this.apiUrl, { params }).pipe(
      map(res => {
        let items = Array.isArray(res.data) ? res.data : [];
        // Ensure items have real images array, otherwise filter out empty dummy test records
        items = items.filter(p => Array.isArray(p.images) && p.images.length > 0 && p.images[0].includes('.'));

        if (items.length === 0) {
          const filtered = category
            ? DEFAULT_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase())
            : DEFAULT_PROJECTS;
          return {
            success: true,
            count: filtered.length,
            data: filtered
          };
        }
        return {
          success: true,
          count: items.length,
          data: items
        };
      }),
      catchError(() => {
        const filtered = category
          ? DEFAULT_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase())
          : DEFAULT_PROJECTS;
        return of({
          success: true,
          count: filtered.length,
          data: filtered
        });
      })
    );
  }

  getProject(id: string): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const found = DEFAULT_PROJECTS.find(p => p._id === id) || DEFAULT_PROJECTS[0];
        return of({
          success: true,
          data: found
        });
      })
    );
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
