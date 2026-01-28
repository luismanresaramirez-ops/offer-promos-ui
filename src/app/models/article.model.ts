import { Mineur } from './mineur.model';

/**
 * Représente un article majeur ou mineur. Les articles majeurs peuvent
 * contenir une liste d'articles mineurs associés.
 */
export interface Article {
  id: number;
  designation: string;
  price: number;
  mineurs: Mineur[];
}