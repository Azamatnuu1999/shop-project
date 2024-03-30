import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MesssageService {

    private http = inject(HttpClient);

    private botId = '6688873254:AAEwD9__feAmOiaKtgF21lRD5zroXP9uo98';
    private groupId = '-1002132661840';
    private get api() {
        return `https://api.telegram.org/bot${this.botId}/sendMessage?chat_id=${this.groupId}&parse_mode=markdown&text=`
    }

    sendMessage(text: string) : Observable<string> {
        return this.http.get<string>(this.api + text);
    }

}