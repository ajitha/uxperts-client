import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(message: string) {
    return this.http.get('http://localhost:4000/getExpertUsers', {
      params: new HttpParams().set('message', message)
    });
  }
}
