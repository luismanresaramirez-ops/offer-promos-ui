/**
 * Représente un article mineur. Un article mineur peut être associé à un article majeur
 * en tant qu'option. Le champ prixEnOption correspond au prix optionnel.
 */
export interface Mineur {
  id: number;
  designation: string;
  prixEnOption: number;
}