import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DeadlineResponse {
  secondsLeft: number;
}

interface EditDeadlineResponse {
  message: string;
  newDeadline: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  private apiUrl = 'https://portfolio-backend-2jmg.onrender.com/api/deadline';

  constructor(private http: HttpClient) {}

  getDeadline(): Observable<DeadlineResponse> {
    return this.http.get<DeadlineResponse>(this.apiUrl);
  }

  editDeadline(newDeadline: string): Observable<EditDeadlineResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { newDeadline };
    return this.http.post<EditDeadlineResponse>(`${this.apiUrl}/edit`, body, { headers });
  }
}
