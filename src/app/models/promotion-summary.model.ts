/**
 * Résumé d'une promotion appliquée à un article. Contient un libellé et
 * la période de validité de la promotion.
 */
export interface PromotionSummary {
  id: number;
  libelle: string;
  dateDebut: string;
  dateFin: string;
}