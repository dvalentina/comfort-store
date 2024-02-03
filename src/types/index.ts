export interface IItem {
  id: number;
  name: string;
  description: string;
  images: string[];
  available_qty: number;
  priceUSD: number;
  colors: string[];
  tags: string[];
  bonuses: string[];
  sale: boolean;
  salePriceUSD?: number;
}
