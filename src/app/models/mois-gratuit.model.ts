/**
 * Contient les informations de mois gratuit retournées par le backend.
 */
export interface MoisGratuit {
  hasMoisGratuit: boolean;
  nb: number;
}

/**
 * Historique d'un mois gratuit appliqué sur un contrat.
 */
export interface MoisGratuitHistorique {
  codeGratuit: string;
  dateDebut: string;
  dateFin: string;
}