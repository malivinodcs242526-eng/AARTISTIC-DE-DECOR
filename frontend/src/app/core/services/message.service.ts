import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Message {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  message: string;
  isRead?: boolean;
  createdAt?: Date;
}

export interface MessageResponse {
  success: boolean;
  count?: number;
  data: Message | Message[];
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = `${environment.apiUrl}/messages`;

  constructor(private http: HttpClient) { }

  getMessages(): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(this.apiUrl);
  }

  submitMessage(messageData: any): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.apiUrl, messageData);
  }

  markAsRead(id: string): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.apiUrl}/${id}/read`, {});
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
