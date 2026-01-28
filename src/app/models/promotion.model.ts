import { MoisGratuit } from './mois-gratuit.model';
import { PromotionSummary } from './promotion-summary.model';

/**
 * Représente une promotion sur un article retournée par le backend.
 */
export interface Promotion {
  id: number;
  enPromotion: boolean;
  prixInitial: number;
  prixFinal: number;
  moisGratuit: MoisGratuit | null;
  promotionAppliquee: PromotionSummary | null;
}