import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private http = inject(HttpClient);

  getCards() : Observable<any> {
    return this.http.get<any>('assets/db/db.json')
  }

}
