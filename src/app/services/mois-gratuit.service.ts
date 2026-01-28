import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoisGratuitHistorique } from '../models/mois-gratuit.model';
import { environment } from '../../environements/environements';

@Injectable({ providedIn: 'root' })
export class MoisGratuitService {
  private baseUrl = environment.apiUrl + '/api/mois-gratuits';

  constructor(private http: HttpClient) {}

  /**
   * Récupère l'historique des mois gratuits pour un contrat donné. Le
   * paramètre `active` permet de filtrer les périodes actives ou non.
   */
  getHistorique(numContrat: number, active?: boolean): Observable<MoisGratuitHistorique[]> {
    let params = new HttpParams();
    if (active !== undefined) {
      params = params.set('active', String(active));
    }
    return this.http.get<MoisGratuitHistorique[]>(`${this.baseUrl}/${numContrat}`, { params });
  }
}