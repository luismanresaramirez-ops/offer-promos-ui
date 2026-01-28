import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../models/promotion.model';
import { environment } from '../../environements/environements';

@Injectable({ providedIn: 'root' })
export class PromotionService {
  private baseUrl = environment.apiUrl + '/offers-promotions/promotions';

  constructor(private http: HttpClient) {}

  /**
   * Récupère l'ensemble des promotions actives pour une date donnée. Le
   * paramètre decalant permet de demander ou non au backend d'appliquer les
   * éventuels décalages sur les promotions.
   */
  getPromotions(date?: string, decalant: boolean = true): Observable<Promotion[]> {
    let params = new HttpParams().set('decalant', String(decalant));
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<Promotion[]>(this.baseUrl, { params });
  }
}